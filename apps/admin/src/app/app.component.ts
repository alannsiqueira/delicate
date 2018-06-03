import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { } from '@fuse/components/navigation/navigation.service';

import { navigation, defaultLanguage, languages } from './../navigation/navigation';
import { locale as navigationPortuguese } from '../navigation/i18n/pt';
import { locale as navigationEnglish } from '../navigation/i18n/en';


@Component({
  selector: 'fuse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public navigation = navigation;

  constructor(
    private translate: TranslateService,
    private fuseNavigationService: FuseNavigationService,
    private fuseSplashScreen: FuseSplashScreenService,
    private fuseTranslationLoader: FuseTranslationLoaderService,
  ) {
    this.translate.addLangs(languages.map(language => language.id));

    this.translate.setDefaultLang(defaultLanguage.id);

    this.fuseTranslationLoader.loadTranslations(navigationPortuguese, navigationEnglish);

    this.translate.use(defaultLanguage.id);


  }
}
