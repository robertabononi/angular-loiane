import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    )
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

}
