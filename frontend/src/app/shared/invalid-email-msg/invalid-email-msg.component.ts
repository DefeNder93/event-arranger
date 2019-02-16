import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-invalid-email-msg',
  templateUrl: './invalid-email-msg.component.html',
  styleUrls: ['./invalid-email-msg.component.scss']
})
export class InvalidEmailMsgComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name = 'Email';
  @Input() field = 'email';

  constructor() { }

  ngOnInit() {
  }

}
