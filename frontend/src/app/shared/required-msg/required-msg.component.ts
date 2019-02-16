import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-required-msg',
  templateUrl: './required-msg.component.html',
  styleUrls: ['./required-msg.component.scss']
})
export class RequiredMsgComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name: string;
  @Input() field: string;

  constructor() { }

  ngOnInit() {
  }

}
