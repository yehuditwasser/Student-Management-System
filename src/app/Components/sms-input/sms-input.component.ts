import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sms-input',
  templateUrl: './sms-input.component.html',
  styleUrls: ['./sms-input.component.css']
})
export class SmsInputComponent {
  @Input() width : string = "";

  value: string | undefined ;
}
