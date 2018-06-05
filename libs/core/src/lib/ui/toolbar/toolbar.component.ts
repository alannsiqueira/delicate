import { Component, InjectionToken, Inject, Input } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Language } from './../main.component';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';


@Component({
  selector: 'fuse-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class FuseToolbarComponent {
  userStatusOptions: any[];
  showLoadingBar: boolean;
  horizontalNav: boolean;
  noNav: boolean;
  quickPanelVisible: boolean


  private _selectedLanguage: any = this.defaultLanguage;
  @Input()
  public get selectedLanguage(): any { return this._selectedLanguage ? this._selectedLanguage : this.defaultLanguage ; }
  public set selectedLanguage(selectedLanguage: any) {
    this._selectedLanguage = selectedLanguage;
  }


  private _defaultLanguage: Language;
  @Input()
  public get defaultLanguage(): Language { return this._defaultLanguage; }
  public set defaultLanguage(defaultLanguage: Language) {
    this._defaultLanguage = defaultLanguage;
  }


  private _languages: Language[];
  @Input()
  public get languages(): Language[] { return this._languages; }
  public set languages(languages: Language[]) {
    this._languages = languages;
  }


  private _navigation: any;
  @Input()
  public get navigation(): any { return this._navigation; }
  public set navigation(navigation: any) {
    this._navigation = navigation;
  }


  constructor(
    private router: Router,
    private fuseConfig: FuseConfigService,
    private sidebarService: FuseSidebarService,
    private translate: TranslateService,
  ) {
    this.userStatusOptions = [
      {
        title: 'Online',
        icon: 'icon-checkbox-marked-circle',
        color: '#4CAF50'
      },
      {
        title: 'Away',
        icon: 'icon-clock',
        color: '#FFC107'
      },
      {
        title: 'Do not Disturb',
        icon: 'icon-minus-circle',
        color: '#F44336'
      },
      {
        title: 'Invisible',
        icon: 'icon-checkbox-blank-circle-outline',
        color: '#BDBDBD'
      },
      {
        title: 'Offline',
        icon: 'icon-checkbox-blank-circle-outline',
        color: '#616161'
      }
    ];

    this.languages = this.navigation;

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showLoadingBar = true;
      }
      if (event instanceof NavigationEnd) {
        this.showLoadingBar = false;
      }
    });

    this.fuseConfig.onConfigChanged.subscribe(settings => {
      this.horizontalNav = settings.layout.navigation === 'top';
      this.noNav = settings.layout.navigation === 'none';
      this.quickPanelVisible = settings.layout.quickPanelVisible;
    });

  }

  toggleSidebarOpened(key) {
    this.sidebarService.getSidebar(key).toggleOpen();
  }

  search(value) {
    // Do your search here...
    console.log(value);
  }

  setLanguage(lang) {
    // Set the selected language for toolbar
    this.selectedLanguage = lang;

    // Use the selected language for translations
    this.translate.use(lang.id);
  }
}
