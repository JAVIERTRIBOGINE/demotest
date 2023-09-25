import { Component, OnInit } from '@angular/core';
import { ConnectionState } from 'src/app/core/globalStates/connection.state';
import { ErrorState } from 'src/app/core/globalStates/error.state';
import { VersionState } from 'src/app/core/globalStates/version.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checked:boolean = false;
  toggleValue: boolean = false;
  constructor(private versionState: VersionState, public errorState: ErrorState, public connectionState: ConnectionState) { }

  ngOnInit(): void {
    this.connectionState.getOffline().subscribe(
      data => {
        this.toggleValue = data;
        this.versionState.setSwitch(this.toggleValue);
        this.errorState.setFailState(!this.connectionState.onlineValue && this.errorState.fail  );

      }
      );
  }

  toggleChecked(event: any) {
    this.versionState.setSwitch(this.toggleValue);
    this.errorState.setFailState(event.checked && !this.connectionState.onlineValue);
  }



}
