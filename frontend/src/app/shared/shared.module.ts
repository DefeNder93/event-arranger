import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { RequiredMsgComponent } from './required-msg/required-msg.component';
import { MaxlengthMsgComponent } from './maxlength-msg/maxlength-msg.component';
import {TranslateModule} from "@ngx-translate/core";
import { InvalidEmailMsgComponent } from './invalid-email-msg/invalid-email-msg.component';

@NgModule({
  declarations: [
    RequiredMsgComponent,
    MaxlengthMsgComponent,
    InvalidEmailMsgComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RequiredMsgComponent,
    MaxlengthMsgComponent,
    InvalidEmailMsgComponent
  ]
})
export class SharedModule { }
