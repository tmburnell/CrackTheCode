import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import * as SHA256 from './sha256';

export enum statuses {
  valid = 'unlock',
  invalid = 'lock'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public status: statuses = statuses.invalid;
  public codes = {
    '0': '',
    '1': '',
    '2': ''
  };

  private validCode = '19158c4a7252e121f7367e7e86a3baabbf93fded76110076cfab2b31eb7df887';

  @ViewChildren('editable') inputs: QueryList<any>;

  ngAfterViewInit() {
    this.inputs.toArray()[0].nativeElement.focus();
  }

  validateCode(index: number, event) {
    this.codes[index] = event.key;

    const pass = this.codes['0'] + this.codes['1'] + this.codes['2'];

    this.status = (SHA256.hash(pass) === this.validCode) ? statuses.valid : statuses.invalid;

    if (index < 2) {
      this.inputs.toArray()[index + 1].nativeElement.focus();
    }
  }
}
