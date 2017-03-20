import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';


import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
@Component({
	selector: 'register',
	templateUrl: 'register.template.html'
	})
export class registerComponent implements OnInit{ 

	form: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;

	constructor( private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenService: TokenService) {

	}


	ngOnInit() {

		this.userService.logout();

		this.form = this.formBuilder.group({
			nombre: ['', Validators.required],
			email: ['', Validators.required],
			telefono: ['', Validators.required],
			tipo: ['', Validators.required],
			nombre_comercial: ['', Validators.required],
			razon_social: ['', Validators.required],
			password: ['', Validators.required]
			});



	}


	create() {
		this.userService.create(this.form.value).then(user => {
				}).catch(res => {
					console.log("Error en algun campo")
					
					});
			}
}