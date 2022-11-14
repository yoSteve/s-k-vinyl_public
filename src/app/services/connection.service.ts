import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private connectionMonitor = new ReplaySubject<boolean>();

  constructor() {
    this.connectionMonitor.next(navigator.onLine);

    window.addEventListener('offline', () => {
      this.connectionMonitor.next(false);
    });

    window.addEventListener('online', () => {
      this.connectionMonitor.next(true);
    });
  }

  get isConnected$(): Subject<boolean> {
    return this.connectionMonitor;
  }
}
