import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { fuseConfig } from '../fuse-config';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseModule } from '@fuse/fuse.module';
import { CoreModule as DelicateCore } from '@delicate/core';
import { NxModule } from '@nrwl/nx';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),

    TranslateModule.forRoot(),
    NxModule.forRoot(),

    // Fuse Main and Shared modules
    FuseModule.forRoot(fuseConfig),
    DelicateCore,
    FuseSharedModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
