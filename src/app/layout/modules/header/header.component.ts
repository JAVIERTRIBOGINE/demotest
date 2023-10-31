import { RandomGeneratorService } from './../../../core/services/random-generator.service';
import { Component } from '@angular/core';
import { Observable, map, pairwise } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  messages!: Observable<string>;
  checked = false;
  toggleValue = false;
  rate$!: Observable<number>;
  rate!: number;
  increase!: boolean;

  constructor(private randomGeneratorService: RandomGeneratorService) {
    this.randomGeneratorService.randomRate$
      .pipe(
        pairwise(),
        map(([previous, current]) => {
          this.increase = previous < current;
          this.rate = current;
        }),
      )
      .subscribe();
  }
}
