import { Component, OnInit } from '@angular/core';
// import { ErrorState } from 'src/app/core/globalStates/error.state';
// import { VersionState } from 'src/app/core/globalStates/version.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checked:boolean = false;
  toggleValue: boolean = false;
  // constructor(private versionState: VersionState, public errorState: ErrorState) { }

  ngOnInit(): void {
  }

  toggleChecked(event: any) {
    // this.errorState.fail$.next(false);
    // this.versionState.setSwitch(this.toggleValue);
  }



}
