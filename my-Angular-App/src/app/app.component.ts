import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  quote = { content: "", author: "" ,rating:0}
  display_quotes: any;
  display_errors= "";

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    // this.quote = { content: "", author: "" ,rating:0}
    this.showQuotes();
  }
  createNewQuote() {
    this.display_errors="";
    let obs = this._httpService.createNewQuote(this.quote);
    console.log(this.quote);
    obs.subscribe((data) => {

      if (data['message'] == "error") {
        console.log("error is", data['data']);

        if (data['data'].errors.content) {
          this.display_errors = (data['data'].errors.content.message);
        }
        if (data['data'].errors.author) {
          this.display_errors += "     " + (data['data'].errors.author.message);
        }
        console.log(this.display_errors);
      }
      else {
        console.log("got data from post back", data);
        this.quote = { content: "", author: "" ,rating:0}
        this.showQuotes();
      }
    })
  }

  showQuotes() {
    let obs = this._httpService.showQuotes();
    obs.subscribe(data => {
      this.display_quotes = data;
    })
  }

  deleteQuote(id) {
    let del_obs = this._httpService.deleteQuote(id);
    del_obs.subscribe(data => {
      this.showQuotes();
    })
  }

  voteUp(id){
    let obs =this._httpService.updateQuote(id, 1)
    obs.subscribe(data => 
    this.showQuotes());
  }
  
  voteDown(id){
    let obs =this._httpService.updateQuote(id, -1)
    obs.subscribe(data => 
    this.showQuotes());
  }
}