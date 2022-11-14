import { Album } from '@app/_models/album.type';


export class GetAlbums {
  static readonly type = '[Album] Get Albums';
  constructor() {}
}

export class AddAlbum {
  static readonly type = '[Album] Add Album';
  constructor(public album: Album) { }
}

export class DeleteAlbum {
  static readonly type = '[Album] Delete Album';
  constructor(public album: Album) { }
}

export class SetUser {
  static readonly type = '[User] Set User';
  constructor(public user: any) {}
}

export class RemoveUser {
  static readonly type = '[User] Remove User';
  constructor() {}
}
