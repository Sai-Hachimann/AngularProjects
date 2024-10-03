import { Directive, input, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  // @Input({ alias: 'appSafeLink' }) queryParam!: string;
  queryParam = input('myapp', { alias: 'appLink' });
  constructor() {
    console.log('SafelinkDirective is active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave this page');

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        address + '?from=' + this.queryParam;
      return;
    } else {
      event.preventDefault();
    }
  }
}
