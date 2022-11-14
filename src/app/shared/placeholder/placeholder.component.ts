import { Component, OnInit, Input } from '@angular/core';
import { vinylRecord } from 'src/assets/svg-modules/vinyl-record.svg';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'skv-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {
  @Input() title: string;
  @Input() subtitle: string;
  vinylRecordSVG = this.sanitizer.bypassSecurityTrustHtml(vinylRecord);

  constructor(private sanitizer: DomSanitizer) { }

}
