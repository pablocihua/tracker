import { Component,OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder,Validators}  from '@angular/forms';

import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';


import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { User } from '../../objects/user';
import { Customer } from './envios.interface';




@Component({
	selector: 'EnviosCreate',
	templateUrl: 'envios.create.template.html'
	})
export class EnviosCreateComponent implements OnInit{ 


public myForm: FormGroup;





public form: FormGroup;


submitted: boolean = false;
	unauthorized: boolean = false;
	user: any = this.tokenService.user;
	constructor( private _fb: FormBuilder, overlay: Overlay, vcRef: ViewContainerRef,public modal: Modal, private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenService: TokenService) {
		
		overlay.defaultViewContainer = vcRef;

	}

	ngOnInit() {

		this.myForm = this._fb.group({
      multidestino: ['', Validators.required], 
      ciudad_origen: ['', Validators.required], 
      direccion_origen: ['', Validators.required], 
      direccion_destino: ['', Validators.required],
      descripcion_carga_detalle: ['', Validators.required],
      unidades: ['', Validators.required],

      alto: ['', Validators.required],
			ancho: ['', Validators.required],
			largo: ['', Validators.required],
			peso: ['', Validators.required],
		
			comentario: ['', Validators.required],

			coordenadas_origen: ['', Validators.required],
			coordenadas_destino: ['', Validators.required],
			maniobra: ['', Validators.required],
			active: ['', Validators.required],


       ciudad_destino: ['', Validators.required],
	  descripcion: ['', Validators.required],
	  descripcion_carga: ['', Validators.required],
	  tipo_unidad: ['', Validators.required],
	  tipo_envio: ['', Validators.required],
	  fecha_recepcion:['', Validators.required],
	  fecha_entrega:['', Validators.required],

	 
	  favorito:['', Validators.required],

            rutas: this._fb.array([
                this.initRutas(),
            ]),
                detalle: this._fb.array([
                
            ])
        });




		console.log(this.user);
	this.tokenService.user.nombre
		//this.userService.logout()


		this.form = this.formBuilder.group({
			name: ['', Validators.required],
			addresses: ['', Validators.required],
			descripcion: ['', Validators.required],
			multidestino: ['', Validators.required],
			descripcion_carga: ['', Validators.required],
			fecha_recepcion: ['', Validators.required],
			fecha_entrega: ['', Validators.required],
			ciudad_origen: ['', Validators.required],
			direccion_origen: ['', Validators.required],
			ciudad_destino: ['', Validators.required],
			direccion_destino: ['', Validators.required],

			alto: ['', Validators.required],
			ancho: ['', Validators.required],
			largo: ['', Validators.required],
			peso: ['', Validators.required],
			unidades: ['', Validators.required],
			comentario: ['', Validators.required],
			descripcion_carga_detalle: ['', Validators.required],
			coordenadas_origen: ['', Validators.required],
			coordenadas_destino: ['', Validators.required],

			maniobra: ['', Validators.required],
			active: ['', Validators.required],

			password: ['', Validators.required]
			});

	}

  


initDetalle() {
        return this._fb.group({
       		descripcion: ['', Validators.required],
            alto: ['', Validators.required],
			ancho: ['', Validators.required],
			largo: ['', Validators.required],
			peso: ['', Validators.required],
			unidades: ['', Validators.required],
			comentario: ['', Validators.required]

			
        });
    }



    initRutas() {
        return this._fb.group({
      
  			
			ciudad_origen: ['', Validators.required],
            ciudad_destino: ['', Validators.required],
			direccion_origen: ['', Validators.required],
			direccion_destino: ['', Validators.required],
			coordenadas_origen: ['', Validators.required],
			coordenadas_destino: ['', Validators.required],
			maniobra: ['', Validators.required],
			observacion: ['', Validators.required],
			detalle: this._fb.array([this.initDetalle()])

			
        });
    }



    addRutas() {
        const control = <FormArray>this.myForm.controls['rutas'];
        control.push(this.initRutas());
    }


    removeRutas(i: number) {
        const control = <FormArray>this.myForm.controls['rutas'];
        control.removeAt(i);
    }



 addDetalle() {
        const control = <FormArray>this.myForm.controls['detalle'];
        control.push(this.initDetalle());
    }


    removeDetalle(i: number) {
        const control = <FormArray>this.myForm.controls['detalle'];
        control.removeAt(i);
    }


    save(model: Customer) {
   

        //console.log(model);
    }




	create_envio() {
		this.userService.create_envio(this.myForm.value).then(user => {
			console.log(this.myForm.value);
				}).catch(res => {
					console.log("Error en algun campo")
					
					});
			}


}