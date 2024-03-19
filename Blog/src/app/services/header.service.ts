import { Injectable,signal } from '@angular/core';
import { Post } from '../interfaces/post.interfaces';

export type HeaderData = Pick<Post, 'title'|'subtitle'|'thumbnail'>

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
uiData = signal<HeaderData> ({title:'',subtitle:'',thumbnail:''})
  static uiData: any;
}
