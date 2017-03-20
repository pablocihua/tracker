import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare var jQuery:any;
//import JsonApiDataStore = require("jsonapi-datastore");
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { User } from './objects/user';
import { UserService } from './services/user.service';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewChecked { 

  user: User = new User();
  drawer: boolean = false;
  commerce_id;
  commerce;
  resultClicked = false;

  private searchTermStream = new Subject<string>();

  constructor(
    private userService: UserService,
    private http: Http
  ){
    userService.userLoggedIn$.subscribe( user => {
      this.user = user;
    });
    userService.userDrawerStream$.subscribe( val => {
      this.drawer = val;
    })
  }

  ngOnInit() {
    this.user = this.userService.user;
  }

  ngAfterViewChecked() {
    jQuery('[data-toggle="tooltip"]').tooltip();
  }

  search(term: string) {
    this.searchTermStream.next(term);
  }
}
/*
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngAfterViewInit() {
    // Run correctHeight function on load and resize window event
    jQuery(window).bind("load resize", function() {
      correctHeight();
      detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    jQuery('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300)
    });
  }

}
*/