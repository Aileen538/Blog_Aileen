import { Injectable, inject } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor() { }

  create(post: Post): void {
    this.posts.push(post);
  }

  getAll(): Post[] {
    return this.posts;
  }

  getByCategoria(categoria: string): Post[] {
    return this.posts.filter(post => post.categoria === categoria);
  }
}