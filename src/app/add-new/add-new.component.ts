import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '@app/services/firebase.service';
import { LastFMService, LastFMAlbum } from '@app/services/last-fm.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'skv-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  form: FormGroup;
  options$: Observable<any>;
  searchField = new FormControl('');
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private firebase: FirebaseService,
    private lastFM: LastFMService,
    private router: Router
  ) {
    this.form = this.fb.group({
      artist: ['', Validators.required],
      title: ['', Validators.required],
      thumbUrl: [''], // large 180x180
      imageUrl: [''], // extralarge 300x300
      detailsUrl: [''],
      isWishlist: ['']
    });
  }

  ngOnInit() {
    this.options$ = this.searchField.valueChanges
    .pipe(
      debounceTime(300),
      tap(() => this.isLoading = true),
      distinctUntilChanged(),
      switchMap(value => this.lastFM.search(value)),
      map(results => results.filter((r, i) => i < 12)),
      tap(res => this.isLoading = res.length === 0),
    );
  }

  get artist(): FormControl {
    return this.form.get('artist') as FormControl;
  }
  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }
  get art(): FormControl {
    return this.form.get('imageUrl') as FormControl;
  }

  onSave() {
    if (this.form.valid) {
      this.firebase.addAlbum(this.form.value)
        .subscribe(res => {
          console.log('album saved ', res);
          this.router.navigate(['list']);
        });
    }
  }

  onSelected(value: LastFMAlbum) {
    this.artist.setValue(value.artist);
    this.title.setValue(value.name);
    this.art.setValue(value.image[3]['#text']);
    this.form.get('thumbUrl').setValue(value.image[2]['#text']);
    this.form.get('detailsUrl').setValue(value.url);
    this.form.get('isWishlist').setValue(false);
    this.searchField.setValue('');
  }

}
