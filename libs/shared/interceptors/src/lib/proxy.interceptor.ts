import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProxyInterceptor implements HttpInterceptor {
  readonly proxies = ['minilyrics', 'minilyrics-proxy'];
  readonly proxiesRegex = this.proxies.map(
    (proxy) => new RegExp('.{2}/' + proxy)
  );

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.proxiesRegex.some((proxyRegex) => proxyRegex.test(request.url))) {
      const dupReq = request.clone({ url: request.url.slice(3) });
      return next.handle(dupReq);
    }
    return next.handle(request);
  }
}
