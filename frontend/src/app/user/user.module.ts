import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './components/add/add.component';
import { UserComponent } from './components/user/user.component';
import {SharedModule} from "../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {StoreModule} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import {FEATURE_NAME, reducers} from "./user.state";
import {UserEffects} from "./user.effects";

@NgModule({
  declarations: [AddComponent, UserComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    TranslateModule.forChild(),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([
      UserEffects
    ])
  ]
})
export class UserModule { }
