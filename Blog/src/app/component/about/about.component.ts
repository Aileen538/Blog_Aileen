import { Component } from '@angular/core';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  private uiData : HeaderData = {
        title: 'Sobre mí',
        subtitle: 'Esta soy yo',
        thumbnail: 'http://placehold.co/300x200'
    }

  constructor(private headerService: HeaderService){
    headerService.uiData.set(this.uiData)

  }
}
