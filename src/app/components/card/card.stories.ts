import {Story, Meta} from '@storybook/angular';
import {CardComponent} from './card.component';
import {Ability} from '../../../game/enums';
import {withContainer} from '../../../decorators';
import {game} from '../../../game';

export default {
    title: 'Components/CardComponent',
    component: CardComponent,
    decorators: [withContainer({width: '325px', height: '494px'})]
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
    props: args,
});

export const Squirrel = Template.bind({});
Squirrel.args = {
    card: game.cardSpawner.createCardFromBlueprint('Squirrel'),
};

export const Stoat = Template.bind({});
Stoat.args = {
    card: game.cardSpawner.createCardFromBlueprint('Stoat'),
};

export const Geck = Template.bind({});
Geck.args = {
    card: game.cardSpawner.createCardFromBlueprint('Geck'),
};

export const Alpha = Template.bind({});
Alpha.args = {
    card: game.cardSpawner.createCardFromBlueprint('Alpha'),
};

export const Cockroach = Template.bind({});
Cockroach.args = {
    card: game.cardSpawner.createCardFromBlueprint('Cockroach', {
        transferredAbilities: [Ability.DeathTouch]
    }),
};

export const Pronghorn = Template.bind({});
Pronghorn.args = {
    card: game.cardSpawner.createCardFromBlueprint('Pronghorn'),
};

export const Amalgam = Template.bind({});
Amalgam.args = {
    card: game.cardSpawner.createCardFromBlueprint('Amalgam'),
};

export const Raven = Template.bind({});
Raven.args = {
    card: game.cardSpawner.createCardFromBlueprint('Raven'),
};

export const FullyLoaded = Template.bind({});
FullyLoaded.args = {
    className: 'card-lg',
    card: game.cardSpawner.createCardFromBlueprint('Urayuli', {
        transferredAbilities: [
            Ability.DeathTouch,
            Ability.DrawCopyOnDeath,
            Ability.Strafe,
            Ability.SplitStrike,
            Ability.DrawCopyOnDeath,
            Ability.Sacrificial,
        ],
    }),

};

