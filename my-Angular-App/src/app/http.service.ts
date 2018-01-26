import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {

  }

  showQuotes(){
    return this._http.get('/quotes')
  }
  createNewQuote(quote) {
    return this._http.post('/quotes', quote)
  }
  deleteQuote(id) {
    return this._http.delete(`/quotes/${id}`)
  }
  // getQuote(id) {
  //   console.log(id);
  //   return this._http.get(`/quotes/${id}`)
  // }
  updateQuote(id, rating) {
    return this._http.patch(`/quotes/${id}`, {"rating":rating});
  }
}
