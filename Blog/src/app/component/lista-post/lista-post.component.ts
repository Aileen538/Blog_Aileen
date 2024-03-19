import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { PostService } from '../../service/post.service';
import { Post } from '../../interfaces/post.interface';


@Component({
  selector: 'app-lista-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./lista-post.component.html',
  styleUrl: './lista-post.component.css'
})
export class ListaPostsComponent implements OnInit {
  posts: Post[] = [];
  categorias: string[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAll();
    this.categorias = Array.from(new Set(this.posts.map(post => post.categoria)));
  }

  filtrarPorCategoria(categoria: string): void {
    this.posts = this.postService.getByCategoria(categoria);
  }

  resetFiltro(): void {
    this.posts = this.postService.getAll();
  }
}