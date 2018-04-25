import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AuthModule } from '@delicate/core/src/auth/auth.module';
import { ErrorModule } from '@delicate/core/src/error/error.module';
import { LoadingModule } from '@delicate/core/src/loading/loading.module';
import { LoggerModule } from '@delicate/core/src/logger/logger.module';
import { NotificationModule } from '@delicate/core/src/notification/notification.module';
import { UiModule } from '@delicate/core/src/ui/ui.module';

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
