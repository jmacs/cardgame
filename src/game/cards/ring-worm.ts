import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'RingWorm',
    title: 'Ring Worm',
    power: 0,
    health: 1,
    tribes: [Tribe.Insect],
    cost: 1,
    currency: Currency.Blood,
    intrinsicAbilities: [Ability.KillsSurvivors],
});
