import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AuthModule } from '@delicate/core/src/lib/auth/auth.module';
import { ErrorModule } from '@delicate/core/src/lib/error/error.module';
import { LoadingModule } from '@delicate/core/src/lib/loading/loading.module';
import { LoggerModule } from '@delicate/core/src/lib/logger/logger.module';
import { NotificationModule } from '@delicate/core/src/lib/notification/notification.module';
import { UiModule } from '@delicate/core/src/lib/ui/ui.module';

const modules = [
  AuthModule
  , ErrorModule
  , LoadingModule
  , LoggerModule
  , NotificationModule
  , UiModule
]

@NgModule({
  imports: [
    CommonModule
    , ...modules
  ]
  , exports: [...modules]
})
export class CoreModule { }
