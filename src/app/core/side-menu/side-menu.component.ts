import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { Select, Store } from '@ngxs/store';
import { AppState } from '@app/store/app-state';
import { RemoveUser } from '@app/store/app.actions';

@Component({
  selector: 'skv-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() navigate = new EventEmitter();
  @Select(AppState.user) user$: Observable<User>;

  constructor(private store: Store) {
  }

  ngOnInit() {}

  signout() {
    this.store.dispatch(new RemoveUser());
  }
}
