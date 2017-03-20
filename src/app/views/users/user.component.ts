import { Component,OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';

import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';

import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { User } from '../../objects/user';
@Component({
	selector: 'user',
	templateUrl: 'user.template.html'
	})
export class userComponent implements OnInit{ 


	formChangePassword: FormGroup;
	formUpdate: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;
	user: any = this.tokenService.user;
	constructor( overlay: Overlay, vcRef: ViewContainerRef,public modal: Modal, private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenService: TokenService) {
		
		overlay.defaultViewContainer = vcRef;

	}


	ngOnInit() {
		console.log(this.user);
	this.tokenService.user.nombre
		//this.userService.logout();

		this.formUpdate = this.formBuilder.group({
			nombre: ['', Validators.required],
			email: ['', Validators.required],
			telefono: ['', Validators.required],
			tipo: ['', Validators.required],
			nombre_comercial: ['', Validators.required],
			razon_social: ['', Validators.required],
			password: ['', Validators.required]
			});


	this.formChangePassword = this.formBuilder.group({
			
			email: ['', Validators.required],
			old_password: ['', Validators.required],
			new_password: ['', Validators.required]
			
			});



	}

	update() {
		this.userService.update(this.formUpdate.value).then(user => {
				}).catch(res => {
					console.log("Error en algun campo")
					
					});
			}

	changepassword() {
		this.userService.changepassword(this.formChangePassword.value).then(user => {
				console.log("si cambio el pass")

				}).catch(res => {
					console.log("Error en algun campo")
					
					});
		}
	
			onClick() {
			     this.modal.confirm()
			      .size('sm')
			      .isBlocking(true)
			      .showClose(false)
			      .keyboard(27)
			      .title('Confirmar Actualizacion de datos!')
			      .body('estas seguro')
			      .okBtn('Confirmar')
			      .cancelBtn('Cancelar')
			      .open()
			      .catch((err: any) => console.log('ERROR: ' + err))
			         .then((dialog: any) => {  


			         	return dialog.result})
			         .then((result: any) => { 


			         	this.changepassword() })
			         .catch((err: any) => {});
			  }



}