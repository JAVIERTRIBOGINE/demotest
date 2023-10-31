import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from 'src/app/core/models/bradcrumb.model';
import { isBloquedTag } from 'src/app/core/utils';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  links: Breadcrumb[] = [];
  linksDemo: Breadcrumb[] = [];

  accumulativeRoute = '';
  constructor(private router: Router) {
    this.conformBreadcrumb(router);
  }

  private conformBreadcrumb(router: Router) {
    router.events.subscribe((event: unknown) => {
      if (event instanceof NavigationEnd) {
        this.links = [];
        this.accumulativeRoute = '';

        this.router.url
          .split('/')
          .slice(1)
          .forEach((item) => {
            if (!isBloquedTag(item)) {
              this.accumulativeRoute += `/${item}`;
              this.links.push({ link: this.accumulativeRoute, tag: item });
            }
          });
      }
    });
  }
}
