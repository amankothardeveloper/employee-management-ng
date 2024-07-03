import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg-paths',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./svg.component.html",
  styles: [`
    /* Add any CSS styles you need for your SVG */
  `]
})
export class SvgComponent implements AfterViewInit {

  

  constructor() {
    svg:ElementRef;
   }
   @ViewChild('svg', { static: true }) svg!: ElementRef;

  ngAfterViewInit(): void {
    const paths = this.svg.nativeElement.querySelectorAll('path');
    console.log(paths);
    for(let i =0;i<paths.length;i++){
      paths[i].onclick=()=>{
        console.log(paths[i].getAttribute('id'));
      }
    }
   
  }
}
