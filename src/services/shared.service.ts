import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static intance: SharedService = null;
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    return SharedService.intance = SharedService.intance || this
  }

  public static getInstance() {
    if (this.intance == null) {
      this.intance = new SharedService();
    }
    return this.intance;
  }

}
