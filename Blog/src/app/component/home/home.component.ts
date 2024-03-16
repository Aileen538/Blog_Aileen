import { Component } from '@angular/core';
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PostPreviewComponent]
})
export class HomeComponent {

}
