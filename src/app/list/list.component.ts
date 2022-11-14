import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '@app/_models/album.type';
import { Select } from '@ngxs/store';
import { AppState } from '@app/store/app-state';

@Component({
  selector: 'skv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Select(AppState.albums) albums$: Observable<Album[]>;

  constructor() {}

  ngOnInit() {}

}
