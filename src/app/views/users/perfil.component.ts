import { Component,OnInit,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';
import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { User } from '../../objects/user';

@Component({
	selector: 'perfil',
	templateUrl: './perfil.template.html'
})
export class perfilComponent implements OnInit{
	user: any = new User();
	formInvitado: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;
	datausuario: any;
	id_usuario: any;
	id: any;
	constructor( 
		overlay: Overlay, vcRef: ViewContainerRef,
		public modal: Modal,
		private formBuilder: FormBuilder, 
		private userService: UserService, 
		private router: Router, 
		private tokenService: TokenService
	){
		overlay.defaultViewContainer = vcRef;
	}

	ngOnInit() {
		this.invitedlist()	
		this.tokenService.user.nombre
		//this.userService.logout();
		this.formInvitado = this.formBuilder.group({
			nombre: ['', Validators.required],
			email: ['', Validators.required],
			telefono: ['', Validators.required],
			nombre_comercial: ['', Validators.required],
			razon_social: ['', Validators.required],
			perfil: ['', Validators.required],
			password: ['', Validators.required]
		});
		this.userService.invitedlist().then(datausuario => {
			this.datausuario = datausuario
		});
	}

	invited() {
		this
		.userService
		.invited( this.formInvitado.value ).then( user => {
			console.log("////valor de invitados////")
			console.log(this.formInvitado.value)
		}).catch( res => {
			console.log("Error en algun campo")
		});
	}

	invitedlist() {
		this.userService.invitedlist().then(user => {
			
			console.log("lista de invitados/");
			console.log(user);
			}).catch(res => {
				console.log("Error en algun campo2")
			});
	}

	invitedanular() {
		this.userService
		.creatinviteanulare( this.id )
		.then(user => {
			console.log("si cambio el pass")
		}).catch(res => {
			console.log("Error en algun campo")
		});
	}
}