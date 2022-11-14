import { State, Action, StateContext, NgxsOnInit, Selector } from '@ngxs/store';
import { User } from 'firebase';
import { Album } from '@app/_models/album.type';
import { AddAlbum, GetAlbums, DeleteAlbum, SetUser, RemoveUser } from './app.actions';
import { FirebaseService } from '@app/services/firebase.service';
import { tap } from 'rxjs/operators';
import { AuthService } from '@app/services/auth.service';
import { ConnectionService } from '@app/services/connection.service';

export interface AppStateModel {
  user: User | any;
  albums: Album[];
}

@State<AppStateModel>({
  name: 'AppState',
  defaults: {
    user: null,
    albums: [],
  }
})
export class AppState implements NgxsOnInit {
  constructor(
    private firebase: FirebaseService,
    private auth: AuthService,
    private connection: ConnectionService) {}

  @Selector()
  static user(state: AppStateModel) {
    return state.user;
  }

  @Selector()
  static albums(state: AppStateModel) {
    return state.albums;
  }

  ngxsOnInit(ctx: StateContext<AppStateModel>) {
    this.connection.isConnected$
      .subscribe(connected => {
        if (connected) {
          console.log('store: is connected');
          ctx.dispatch(new GetAlbums());
          if (ctx.getState().user) {
            this.auth.isLoggedIn = true;
          }
        } else {
          console.log('store: not connected');
          const storage = localStorage.getItem('@@STATE');
          const appState = JSON.parse(storage).AppState as AppStateModel;
          ctx.setState(appState);
        }
      });
  }

  @Action(SetUser)
  setUser(ctx: StateContext<AppStateModel>, action: SetUser) {
    const user = JSON.parse(action.user);
    ctx.patchState({ user });
  }

  @Action(RemoveUser)
  removeUser(ctx: StateContext<AppStateModel>) {
    return this.auth.logout()
      .pipe(
        tap(() => ctx.patchState({ user: null }))
      );
  }

  @Action(GetAlbums)
  getAlbums(ctx: StateContext<AppStateModel>) {
    return this.firebase.getAlbums()
      .pipe(
        tap(albums => ctx.patchState({ albums }))
      );
  }

  @Action(AddAlbum)
  addAlbum(ctx: StateContext<AppStateModel>, action: AddAlbum) {
    const state = ctx.getState();
    return this.firebase.addAlbum(action.album)
      .pipe(
        tap(newAlbum => {
          ctx.patchState({
            albums: [ ...state.albums, newAlbum ]
          });
        })
      );
  }

  @Action(DeleteAlbum)
  DeleteAlbum(ctx: StateContext<AppStateModel>, action: DeleteAlbum) {
    const state = ctx.getState();
    return this.firebase.deleteAlbum(action.album)
      .pipe(
        tap(() => {
          const filtered = state.albums
            .filter(album => album.id === action.album.id);
          ctx.patchState({ albums: filtered });
        })
      );
  }
}
