import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sms-button',
  templateUrl: './sms-button.component.html',
  styleUrls: ['./sms-button.component.css']
})
export class SmsButtonComponent {
  @Input() text : string = "";
  @Input() backColor : string = "";
  @Input() width : string = "";

  readonly getClassBackColor = new Map([
    ['blue', 'blue'],
    ['white', 'white']
  ]);
}
