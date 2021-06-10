import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef) {
    //console.log(this._elementRef)
    this._elementRef.nativeElement.style.backgroundColor = "yellow";
  }

}
