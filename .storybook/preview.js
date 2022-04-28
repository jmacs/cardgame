import {setCompodocJson} from '@storybook/addon-docs/angular';
import {moduleMetadata} from '@storybook/angular';
import {ComponentsModule} from '../src/app/components/components.module';
import {StorybookAngularServiceModule, withInjector} from './decorators/angular-service';
import docJson from '../documentation.json';
import {game} from '../src/game';
import '../src/styles.scss';

setCompodocJson(docJson);

export const decorators = [
    withInjector,
    moduleMetadata({
        imports: [
            StorybookAngularServiceModule, // for service locator
            ComponentsModule, // used everywhere
        ],
    }),
];

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*'
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        inlineStories: true
    },
}

game.initialize();
