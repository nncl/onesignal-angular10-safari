import { Component, OnInit } from '@angular/core';
import { PushService } from './services/push/push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'onesignal-testing';

  constructor(private pushService: PushService) {}

  ngOnInit() {
    this.pushService.init();
  }
}
