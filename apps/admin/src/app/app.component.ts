import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { } from '@fuse/components/navigation/navigation.service';

import { MENU, defaultLanguage, languages } from './app.menu';
import { locale as navigationPortuguese } from '../assets/i18n/pt';
import { locale as navigationEnglish } from '../assets/i18n/en';


@Component({
  selector: 'fuse-root',
  template: `<fuse-main [defaultLanguage]="defaultLanguage" [logo]="'assets/images/logos/fuse.svg'" [languages]="languages" [navigation]="navigation"></fuse-main>`
})
export class AppComponent {

  public navigation = MENU;
  public languages = languages;
  public defaultLanguage = defaultLanguage;

  constructor(
    private translate: TranslateService,
    private fuseNavigationService: FuseNavigationService,
    private fuseSplashScreen: FuseSplashScreenService,
    private fuseTranslationLoader: FuseTranslationLoaderService,
  ) {
    this.fuseTranslationLoader.loadTranslations(navigationPortuguese, navigationEnglish);
    this.translate.addLangs(languages.map(language => language.id));
    this.translate.setDefaultLang(defaultLanguage.id);
    setTimeout(() => this.translate.use(defaultLanguage.id), 0);
  }
}
