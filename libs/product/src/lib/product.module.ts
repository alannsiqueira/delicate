import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductService } from './product/product.service';
import { ProductComponent } from './product/product.component';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { locale as portuguese } from './i18n/pt';
import { locale as english } from './i18n/en';

const modules = [
  CommonModule,
  NgxDatatableModule,

  FuseSharedModule,
  FuseWidgetModule
]

@NgModule({
  imports: [
    ...modules
    , TranslateModule.forChild()
    , RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
      },
    ])
  ],
  declarations: [ProductComponent]
  , exports: [...modules]
  , providers: [ProductService]
})
export class ProductModule {
  constructor(
    private fuseTranslationLoader: FuseTranslationLoaderService
    , private translate: TranslateService
  ) {

    this.fuseTranslationLoader.loadTranslations(portuguese, english);
    this.translate.addLangs(['pt,en']);
    this.translate.setDefaultLang('pt');
    setTimeout(() => this.translate.use('pt'), 0);
  }

}