import {Injector, NgModule, NgZone} from '@angular/core';
import addons from '@storybook/addons';
import {STORY_RENDERED} from '@storybook/core-events';

let ngZoneInstance = null;
let injectorInstance = null;

@NgModule({})
export class StorybookAngularServiceModule {
    constructor(
        private injector: Injector,
        private ngZone: NgZone,
    ) {
        injectorInstance = injector;
        ngZoneInstance = ngZone;
    }
}

type InjectorCallback = (injector: Injector) => void;

export function withInjector(story, context) {
    const useInjector = context.parameters.useInjector as InjectorCallback;
    if (typeof useInjector === 'function') {
        addons.getChannel().once(STORY_RENDERED, () => {
            ngZoneInstance.run(() => {
                useInjector(injectorInstance);
            });
        });
    }
    return story();
}
