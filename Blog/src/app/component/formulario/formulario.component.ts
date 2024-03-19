import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from '../../interfaces/post.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  post: Post = {
    titulo: '',
    texto: '',
    autor: '',
    fecha: new Date(),
    categoria: ''
  };

  constructor(private postService: PostService) { }

  onSubmit(): void {
    this.postService.create(this.post);
    this.post = {
      titulo: '',
      texto: '',
      autor: '',
      fecha: new Date(),
      categoria: ''
    };
  }
}