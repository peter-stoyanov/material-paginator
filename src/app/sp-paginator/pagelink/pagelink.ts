
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  moduleId: '',
  selector: 'pagelink',
  //exportAs: 'matPaginator',
  templateUrl: './pagelink.html',
  styleUrls: ['./pagelink.scss'],
  //inputs: ['disabled'],
  // host: {
  //   'class': 'mat-paginator',
  // },
  changeDetection: ChangeDetectionStrategy.OnPush,
  //encapsulation: ViewEncapsulation.None,
})
export class PageLink {

  @Input() pagelinkIndex: number;
  
  @Input() selected = false;

  @Output() readonly page: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
  }

  emitPageLinkEvent() {
    this.page.emit(this.pagelinkIndex);
  }
}