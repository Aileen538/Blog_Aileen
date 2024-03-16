import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
uiData = signal ({title:'',subtitle:'',thumbnail:''})
}
