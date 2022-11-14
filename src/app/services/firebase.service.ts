import { Injectable } from '@angular/core';
import { Album } from '@app/_models/album.type';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collection: AngularFirestoreCollection<Album>;

  constructor(
    private firestore: AngularFirestore,
    private errorHandler: ErrorHandlerService) {
    this.collection = firestore.collection('albums');
  }

  getAlbums() {
    return this.collection.valueChanges()
      .pipe(catchError(this.errorHandler.handleError));
  }

  addAlbum(album: Album) {
    const id = this.firestore.createId();
    album.id = id;
    return from(this.collection.add(album))
      .pipe(
        map(() => album),
        catchError(this.errorHandler.handleError)
      );
  }

  deleteAlbum(album: Album) {
    const document = this.firestore.doc('albums/' + album.id);
    return from(document.delete())
      .pipe(catchError(this.errorHandler.handleError));
  }
}

