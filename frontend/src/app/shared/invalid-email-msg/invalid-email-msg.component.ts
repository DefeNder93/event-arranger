import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-invalid-email-msg',
  templateUrl: './invalid-email-msg.component.html',
  styleUrls: ['./invalid-email-msg.component.scss']
})
export class InvalidEmailMsgComponent implements OnInit {

  @Input() form: FormGroup = this.getDefaultFormGroup();
  @Input() name = 'Email';
  @Input() field = 'email';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private getDefaultFormGroup () {
    return this.fb.group({email: ['', [Validators.email, Validators.required, Validators.maxLength(30)]]});
  }

}
