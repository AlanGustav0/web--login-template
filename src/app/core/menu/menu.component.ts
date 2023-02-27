import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public iconBars = faBars;
  public showOverlay = false;

  constructor(private readonly _elementRef:ElementRef<HTMLElement>){}

  public activeMenu(){
    const menu = this._elementRef.nativeElement.querySelector('#overlay-menu');
    menu?.classList.toggle('active');

    if(menu?.classList.contains('active')){
      this.iconBars = faClose;
    }else{
      this.iconBars = faBars;
    }

  }

  toggle(){
    this.showOverlay = !this.showOverlay;
  }
}
