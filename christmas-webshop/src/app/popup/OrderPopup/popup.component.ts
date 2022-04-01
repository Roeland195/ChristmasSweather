import { style } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, public el: ElementRef) {
    this.element = el.nativeElement;
    this.id = 'model-1';
  }

  ngOnInit(): void {

    console.log("ONIT");
    this.element.style.display = 'none';
    if(!this.id){
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);
    console.log(this);
    

    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
      if(el.target.className === 'jw-modal'){
        this.close();
      }
    });

    this.modalService.add(this);
  }


  open(): void{
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void{
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }

  ngOnDestroy(): void{
    this.modalService.add(this);
    this.element.remove();
  }

}
