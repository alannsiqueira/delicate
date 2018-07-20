import {
  Component,
  ElementRef,
  HostBinding,
  Inject,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
  InjectionToken,
  Input
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';

import { FuseConfigService } from '@fuse/services/config.service';

export interface Language { id, flag, title };

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fuse-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiMainComponent implements OnDestroy {
  onConfigChanged: Subscription;
  fuseSettings: any;

  @HostBinding('attr.fuse-layout-mode') layoutMode;

  private _navigation: any;
  @Input()
  public get navigation(): any { return this._navigation; }
  public set navigation(navigation: any) {
    this._navigation = navigation;
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

  private _logo: string;
  @Input()
  public get logo(): string { return this._logo; }
  public set logo(logo: string) { this._logo = logo; }

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private fuseConfig: FuseConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private document: any,
  ) {
    this.onConfigChanged = this.fuseConfig.onConfigChanged.subscribe(
      newSettings => {
        this.fuseSettings = newSettings;
        this.layoutMode = this.fuseSettings.layout.mode;
      }
    );

    if (this.platform.ANDROID || this.platform.IOS) {
      this.document.body.className += ' is-mobile';
    }

  }

  ngOnDestroy() {
    this.onConfigChanged.unsubscribe();
  }

  addClass(className: string) {
    this._renderer.addClass(this._elementRef.nativeElement, className);
  }

  removeClass(className: string) {
    this._renderer.removeClass(this._elementRef.nativeElement, className);
  }
}
