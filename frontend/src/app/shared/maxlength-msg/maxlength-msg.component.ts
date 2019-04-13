import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-maxlength-msg',
  templateUrl: './maxlength-msg.component.html',
  styleUrls: ['./maxlength-msg.component.scss']
})
export class MaxlengthMsgComponent implements OnInit {

  @Input() form: FormGroup = this.getDefaultFormGroup();
  @Input() name: string;
  @Input() field: string;
  @Input() maxlength: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private getDefaultFormGroup () {
    return this.fb.group({email: ['', [Validators.email, Validators.required, Validators.maxLength(30)]]});
  }


}
