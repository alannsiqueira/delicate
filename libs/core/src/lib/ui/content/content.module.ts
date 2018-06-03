import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseContentComponent } from './content.component';

@NgModule({
  declarations: [FuseContentComponent],
  imports: [RouterModule, FuseSharedModule],
  exports: [FuseContentComponent]
})
export class FuseContentModule {}
