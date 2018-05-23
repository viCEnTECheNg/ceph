import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor(private http: HttpClient) {
  }

  jsError(url, message, stack) {
    const request = {
      url: url,
      message: message,
      stack: stack
    };
    return this.http.post('ui-api/logging/js-error', request);
  }

}
