import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-maxlength-msg',
  templateUrl: './maxlength-msg.component.html',
  styleUrls: ['./maxlength-msg.component.scss']
})
export class MaxlengthMsgComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name: string;
  @Input() field: string;
  @Input() maxlength: string;

  constructor() { }

  ngOnInit() {
  }

}
