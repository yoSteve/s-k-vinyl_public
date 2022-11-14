import { Component, OnInit } from '@angular/core';
import { vinylRecord } from 'src/assets/svg-modules/vinyl-record.svg';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'skv-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  recordSVG = this.sanitizer.bypassSecurityTrustHtml(
    vinylRecord
  ) as HTMLOrSVGElement;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}
}
