import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LastFMAlbum } from '@app/services/last-fm.service';

@Component({
  selector: 'skv-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() album: LastFMAlbum;
  @Input() query: string;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
