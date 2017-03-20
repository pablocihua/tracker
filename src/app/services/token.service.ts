import { Injectable } from '@angular/core';
import { User } from '../objects/user';
import { LocalStorage, SessionStorage } from "angular2-localstorage/WebStorage";

@Injectable()
export class TokenService {
	@LocalStorage() public user : User = new User();

	reset() {
		this.user = new User();
	}
}