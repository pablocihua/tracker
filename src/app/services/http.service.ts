import {Injectable} from '@angular/core';
import {Http, XHRBackend, BaseRequestOptions, RequestOptions, Request, RequestOptionsArgs, Response, Headers, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

function isPresent(obj) {
    return obj !== undefined && obj !== null;
}

function mergeOptions(
    defaultOpts: BaseRequestOptions, providedOpts: RequestOptionsArgs, method: RequestMethod,
    url: string): RequestOptions {
  const newOptions = defaultOpts;
  if (isPresent(providedOpts)) {
    // Hack so Dart can used named parameters
    return newOptions.merge(new RequestOptions({
      method: providedOpts.method || method,
      url: providedOpts.url || url,
      search: providedOpts.search,
      headers: providedOpts.headers,
      body: providedOpts.body,
      withCredentials: providedOpts.withCredentials,
      responseType: providedOpts.responseType
    }));
  }
  if (isPresent(method)) {
    return newOptions.merge(new RequestOptions({method: method, url: url}));
  } else {
    return newOptions.merge(new RequestOptions({url: url}));
  }
}

@Injectable()
export class HttpService extends Http {
	constructor(backend: XHRBackend, options: RequestOptions) {
		super(backend, options);
	}

	request(url: string|Request, options?: RequestOptionsArgs) : Observable<Response> {
		return super.request(url, options).catch(this.catchAuthError(this));
	}

	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    	return this.request(
        	new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
  	}


	private catchAuthError(self: HttpService) {
		return (res: Response) =>  {
			if(res.status === 401 ) {
				document.location.href = "/"
			}

			return Observable.throw(res);
		}
	}
}