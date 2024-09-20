import { ElementRef, HostBinding, HostListener, inject } from '@angular/core';
import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'
  // @HostListener('click') onClick(){
  //   console.log('clicked!')
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  onClick() {
    console.log('clicked!');
    console.log(this.el.nativeElement.className);
  }
}

/* note: when i executed the following console.log(this.el) in console 
i came across object of above structure which had no class prop
but had className instead 
It reminded me of @HostBinding('class') className = 'control' */
