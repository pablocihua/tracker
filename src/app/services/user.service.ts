import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { User } from '../objects/user';
import { TokenService } from '../services/token.service';
import { API_URL } from '../constants/treck.constant';
//import JsonApiDataStore = require("jsonapi-datastore/dist");
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {
	
	private _user: User
	private userLoggedIn: Subject<User> = new Subject();
	private userDrawerStream: Subject<boolean> = new Subject();
	userLoggedIn$ = this.userLoggedIn.asObservable();
	userDrawerStream$ = this.userDrawerStream.asObservable();
	commerce_id: any;
	user_id: any;
	id_usuario:any;


	constructor(private http: Http, private tokenService: TokenService) {
		this._user = this.tokenService.user;
	}

	get user() {
		return this._user;
	}

	set user(user: User) {
		this._user = user;
	}
/////////////////////////////////////////////////////////////////////////
	login(user: User) : Promise<User> {

	let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + user.token	
		});

		return this.http
			.post(API_URL + 'clientes/auth', user,{ headers: headers })
			.toPromise()
			.then(res => {
				//let usuario = JSON.stringify(user);
				let token = res.json().token;
				let usuario = res.json();
					
			  	this.tokenService.user = usuario;
		
			  	let data = res.headers;

			console.log(data)
				return usuario;
			})
			.catch(this.handleError)
	}

	logout() {
		let user = new User();
		this.drawer(false);
		this.tokenService.reset();
		this.userLoggedIn.next(user);
	}
	  drawer(val) {
    	this.userDrawerStream.next(val);
    }
    handleError(error: any) {
		console.error('un error ocurrido', error);
		return Promise.reject(error.message || error);
	}
//////////////////////////////////////////////////////////////////////////
	create(user: User) : Promise<User> {
		return this.http
			.post(API_URL + 'clientes', user)
			.toPromise()
			.then(res => {
				let usuario = res.json();
			  	this.tokenService.user = usuario;

				return usuario;
			})
	}

	update(user: User) : Promise<User> {
        return this.http
            .put(API_URL + 'clientes/' + this._user._id , user)
            .toPromise()
            .then(res => {
                let usuario = res.json();
					
			  	this.tokenService.user = usuario;
			  	console.log(usuario);
                return usuario;
            })
            .catch(this.handleError)
    }
///////////////////////////////////////////////////////////////////////////////
	invited(user: User) : Promise<User> {
      user.tipo= ('persona');
      user.perfil= ('Guest');
      user.active= ('true');

        return this.http
            .post(API_URL + 'clientes/' + this._user._id +'/invitado', user)
            .toPromise()
            .then(res => {
                let usuario = res.json();
					

                return usuario;
            })
            .catch(this.handleError)
    }
    ///////////////////////////////////INVITED LIST///////////////////////////////////////////
	invitedlist() : Promise<User> {
      return this.http
			.get(API_URL + 'clientes/' + this._user._id + '/invitados/all')
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError)
	}
     ////////////////////////////////////DELETE INVITED//////////////////////////////////////////
	creatinviteanulare(user: User) : Promise<User> {
		return this.http
			.post(API_URL + 'clientes/' + this._user._id +'/invitado/'+ this._user._id +'/1', user)
			.toPromise()
			.then(res => {
				let usuario = res.json();
			  	this.tokenService.user = usuario;
				
				return usuario;
			})
	}

	changepassword(user: User) : Promise<User> {
      return this.http
			.post(API_URL + 'clientes/pwchange',user)
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError)
	}
      //////////////////////////////////////////////////////////////////////////////
	create_envio(user: User) : Promise<User> {
		return this.http
			.post(API_URL + 'clientes', user)
			.toPromise()
			.then(res => {
				 let usuario = res.json();

				return usuario;
			})
	}
}