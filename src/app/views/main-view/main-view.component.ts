import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
@Component({
    selector: 'mianView',
    templateUrl: 'main-view.template.html'
})
export class mainViewComponent { 


	constructor(private tokenService: TokenService,private router: Router) {

	}


	ngOnInit() {

		if (this.tokenService.user.token != null){

			this.router.navigateByUrl('cliente/dashboard');

			}else{
				this.router.navigateByUrl('cliente/login');

			}


		}
	}