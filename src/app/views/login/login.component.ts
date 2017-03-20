import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';


import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
@Component({
	selector: 'login',
	templateUrl: 'login.template.html'
	})
export class loginComponent implements OnInit{ 

	form: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;

	constructor( private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenService: TokenService) {

	}


	ngOnInit() {

		this.userService.logout();
		this.tokenService.reset();
		this.form = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
			});

	}

	login() {
		this.submitted = true;
		if(this.form.valid) {
		this.userService.login(this.form.value).then(user => {
				
					this.unauthorized = false;

					this.router.navigateByUrl('cliente');

				}).catch(res => {
					console.log("Error de usuario o contraseña")
					this.unauthorized = true;
					});

			}
			}
		}