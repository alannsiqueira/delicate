import { HttpClientModule, HttpClient } from '@angular/common/http';
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


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule
    , FuseModule.forRoot(fuseConfig)
    , FuseSharedModule
    , BrowserAnimationsModule
    , HttpClientModule
    , TranslateModule.forRoot()
    , NxModule.forRoot()
    , DelicateCore
    , RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
