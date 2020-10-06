import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PushService {
  constructor() {}

  init(): void {
    setTimeout(() => {
      const OneSignal = (window as any).OneSignal || [];

      if (OneSignal.log) {
        OneSignal.log.setLevel('trace');
      }

      OneSignal.push(function () {
        OneSignal.init({
          appId: 'fc4c9f95-8b76-41ac-b0b8-353915a86488',
          safari_web_id:
            'web.onesignal.auto.0353ec9c-a08c-4477-8a0d-c11d5b7e8e59',
          notifyButton: {
            enable: true,
          },
        });
      });

      console.log('Initiated');
    }, 2000);
  }
}
