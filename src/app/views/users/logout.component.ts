import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';


import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { User } from '../../objects/user';
@Component({
	selector: 'logout',
	template: ''
	
	})
export class logoutComponent implements OnInit{ 

	form: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;

	constructor( private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenService: TokenService) {

	}


	ngOnInit() {
		
		this.userService.logout();
		this.router.navigateByUrl('/login');


	}
 

}