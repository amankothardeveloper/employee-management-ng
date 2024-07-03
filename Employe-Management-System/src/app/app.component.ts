import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgComponent } from './svg/svg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Employe-Management-System';
}
