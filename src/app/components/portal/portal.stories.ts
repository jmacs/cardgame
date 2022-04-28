import {Story, Meta} from '@storybook/angular';
import {PortalComponent} from './portal.component';
import {withContainer} from '../../../decorators';
import {Cursor, CardEffect, CardFace, CardMark} from '../../../game/enums';
import {action} from '@storybook/addon-actions';
import {game} from '../../../game';

export default {
    title: 'Components/PortalComponent',
    component: PortalComponent,
    decorators: [withContainer({margin: '50px 150px', width: '250px', height: '400px'})],
    argTypes: {
        face: {
            options: Object.keys(CardFace),
            control: 'select'
        },
        effect: {
            options: Object.keys(CardEffect),
            control: 'select'
        },
        mark: {
            options: Object.keys(CardMark),
            control: 'select'
        },
        cursor: {
            options: Object.keys(Cursor),
            control: 'select'
        }
    }
} as Meta;

const actions = {
    portalClick: action('portalClick'),
};

const Template: Story = (args) => {
    const card = args.card;
    card.face = args.face;
    card.effect = args.effect;
    card.mark = args.mark;
    return {
        props: {
            ...args,
            ...actions,
            card,
        },
    };
};

export const Default = Template.bind({});
Default.args = {
    /* Card Attributes */
    face: CardFace.Front,
    effect: CardEffect.None,
    mark: CardMark.None,

    /* Portal Attributes */
    cursor: Cursor.Default,
    card: game.cardSpawner.createCardFromBlueprint('Cat'),
};
