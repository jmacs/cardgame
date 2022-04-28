import {Meta, Story} from '@storybook/angular';
import {BoardComponent} from './board.component';
import {Injector} from '@angular/core';
import {EncounterService} from '../../state';
import {CardEffect, CardMark, SlotIndex} from '../../../game/enums';
import {game} from '../../../game';
import {delay} from '../../sequences/sequence-utils';

export default {
    title: 'Components/BoardComponent',
    component: BoardComponent,
} as Meta;

const Template: Story<BoardComponent> = (args) => ({
    props: args,
});

export const Default = Template.bind({});
Default.parameters = {
    useInjector: (injector: Injector) => {
        const service = injector.get(EncounterService);
        game.sequencer.run(testSequence, service);
    }
};

function* testSequence(service: EncounterService) {

    yield delay(400);

    service.putCardInSlot(SlotIndex.OpponentSlot1, game.cardSpawner.createCardFromBlueprint('Geck'));

    yield delay(300);

    service.putCardInSlot(SlotIndex.OpponentSlot4, game.cardSpawner.createCardFromBlueprint('Wolf'));

    yield delay(500);

    service.putCardInSlot(SlotIndex.PlayerSlot1, game.cardSpawner.createCardFromBlueprint('Mantis'));

    yield delay(400);

    service.putCardInSlot(SlotIndex.PlayerSlot2, game.cardSpawner.createCardFromBlueprint('RingWorm'));

    yield delay(200);

    service.putCardInSlot(SlotIndex.PlayerSlot3, game.cardSpawner.createCardFromBlueprint('Raven'));

    yield delay(100);

    service.putCardInSlot(SlotIndex.PlayerSlot4, game.cardSpawner.createCardFromBlueprint('Stoat'));

    yield delay(1000);

    service.updateCard(SlotIndex.PlayerSlot1, (card) => card.effect = CardEffect.HitUp);

    yield delay(300);

    service.updateCard(SlotIndex.OpponentSlot1, (card) => {
        card.effect = CardEffect.HurtBelow;
        card.mark = CardMark.Attack;
    });

    yield delay(800);

    service.updateCard(SlotIndex.OpponentSlot1, (card) => {
        card.effect = CardEffect.Death;
        card.mark = CardMark.None;
    });

    yield delay(1000);

    service.removeCardFromSlot(SlotIndex.OpponentSlot1);

    service.updateCard(SlotIndex.PlayerSlot3, (card) => card.effect = CardEffect.HitUp);

    yield delay(700);

    service.updateCard(SlotIndex.PlayerSlot4, (card) => card.effect = CardEffect.HitUp);

    yield delay(300);

    service.updateCard(SlotIndex.OpponentSlot4, (card) => {
        card.effect = CardEffect.HurtBelow;
        card.mark = CardMark.Attack;
    });

    yield delay(800);

    service.updateCard(SlotIndex.OpponentSlot4, (card) => {
        card.effect = CardEffect.Death;
        card.mark = CardMark.None;
    });

    yield delay(1000);

    service.removeCardFromSlot(SlotIndex.OpponentSlot4);
}
