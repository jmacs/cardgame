import {Injector} from '@angular/core';
import {Story, Meta} from '@storybook/angular';
import {EncounterScreen} from './encounter.screen';
import {EncounterService} from '../../state';
import {SlotIndex} from '../../../game/enums';
import {game} from '../../../game';

export default {
    title: 'Screens/EncounterScreen',
    component: EncounterScreen,
} as Meta;

const Template: Story<EncounterScreen> = (args: EncounterScreen) => ({
    props: args,
});

export const Default = Template.bind({});
Default.parameters = {
    useInjector: (injector: Injector) => {
        const service = injector.get(EncounterService);
        service.putCardInSlot(SlotIndex.OpponentSlot1, game.cardSpawner.createCardFromBlueprint('Geck'));
        service.setHand([
            game.cardSpawner.createCardFromBlueprint('Stoat'),
            game.cardSpawner.createCardFromBlueprint('Bee'),
            game.cardSpawner.createCardFromBlueprint('Cat'),
            game.cardSpawner.createCardFromBlueprint('Wolf'),
        ]);
    }
};
Default.args = {
};


