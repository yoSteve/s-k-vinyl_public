import { Injectable } from '@angular/core';
import { environment as ENV } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

export enum ImageSize {
  small, medium, large, extralarge
}
export interface LastFMAlbumResults {
  results: {
    albummatches: {
      album: LastFMAlbum[];
    }
  };
}

export interface LastFMImage {
  '#text': string;
  size: ImageSize;
}

export interface LastFMAlbum {
  artist: string;
  image: ImageSize[];
  mbid: string;
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LastFMService {
  private url = 'https://ws.audioscrobbler.com/2.0';
  private apiKey = ENV.lastFM.apiKey;

  constructor(private http: HttpClient) {}

  search(name: string) {
    name = name && name.length > 0 ? name : ' ';
    return this.http
      .get<LastFMAlbumResults>(`${this.url}/?method=album.search&album=${encodeURI(name)}&api_key=${this.apiKey}&format=json`)
      .pipe(map(({results}) => results.albummatches.album));
  }

}
