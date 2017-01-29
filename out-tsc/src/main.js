import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { hmrBootstrap } from './hmr';
if (environment.production) {
    enableProdMode();
}
var bootstrap = function () {
    return platformBrowserDynamic().bootstrapModule(AppModule);
};
if (environment.hmr) {
    if (module['hot']) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}
//# sourceMappingURL=/home/user/Projects/angular2/src/src/main.js.map