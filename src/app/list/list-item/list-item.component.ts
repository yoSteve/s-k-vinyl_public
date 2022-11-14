import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { Album } from '@app/_models/album.type';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { vinylRecord } from 'src/assets/svg-modules/vinyl-record.svg';

@Component({
  selector: 'skv-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() album: Album;
  thumbUrl: SafeUrl;
  noThumb = this.sanitizer.bypassSecurityTrustHtml(vinylRecord);

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
