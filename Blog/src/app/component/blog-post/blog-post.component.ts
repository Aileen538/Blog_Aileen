import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit {
  ActivatedRoute: any;
  

  constructor(private activateRoute: ActivatedRoute){}

   ngOnInit(): void{
    const slug= this.ActivatedRoute.snapshot.paramMap.get('postId');
    
  }

}
 