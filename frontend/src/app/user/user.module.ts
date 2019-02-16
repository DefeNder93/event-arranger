import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {SharedModule} from "../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class UserModule { }
