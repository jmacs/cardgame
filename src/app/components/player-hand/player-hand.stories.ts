import {Story, Meta} from '@storybook/angular';
import {PlayerHandComponent} from './player-hand.component';
import {action} from '@storybook/addon-actions';
import {withContainer} from '../../../decorators';
import {game} from '../../../game';

export default {
    title: 'Components/PlayerHandComponent',
    component: PlayerHandComponent,
    decorators: [withContainer({margin: '50px 100px'})],
} as Meta;


const actions = {
    cardClick: action('cardClick'),
};

const Template: Story<PlayerHandComponent> = (args) => ({
    props: {
        ...args,
        ...actions,
    },
});

export const Default = Template.bind({});
Default.args = {
    cards: [
        game.cardSpawner.createCardFromBlueprint('Stoat'),
        game.cardSpawner.createCardFromBlueprint('Bee'),
        game.cardSpawner.createCardFromBlueprint('Cat'),
        game.cardSpawner.createCardFromBlueprint('Wolf'),
    ]
};

