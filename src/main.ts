import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {enableAkitaProdMode} from '@datorama/akita';
import {AppModule} from './app/app.module';
import {environment} from './environment';
import './styles.scss';

if (environment.production) {
    enableProdMode();
    enableAkitaProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then((ref) => {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
            window['ngRef'].destroy();
        }
        window['ngRef'] = ref;
    })
    .catch(err => console.error(err));
