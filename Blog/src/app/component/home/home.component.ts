import { Component, OnInit } from '@angular/core';
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PostPreviewComponent]
})
export class HomeComponent implements OnInit {

    private uiData : HeaderData = {
        title: 'Bienvenidos',
        subtitle: 'Blog De Aileen',
        thumbnail: 'http://placehold.co/300x200'
    }

    constructor(private headerService: HeaderService) { } 
    ngOnInit() {
     this.headerService.uiData.set(this.uiData)  
    }
}
