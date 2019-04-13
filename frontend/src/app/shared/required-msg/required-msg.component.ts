import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-required-msg',
  templateUrl: './required-msg.component.html',
  styleUrls: ['./required-msg.component.scss']
})
export class RequiredMsgComponent implements OnInit {

  @Input() form: FormGroup = this.getDefaultFormGroup();
  @Input() name: string;
  @Input() field: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private getDefaultFormGroup () {
    return this.fb.group({email: ['', [Validators.email, Validators.required, Validators.maxLength(30)]]});
  }

}
