import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { TokenService } from '../../../services/token.service';

declare var jQuery:any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent {

    constructor(private router: Router, private tokenService: TokenService) {}

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }

	ngOnInit() {

	 this.tokenService.user.nombre

		}

        
	}


