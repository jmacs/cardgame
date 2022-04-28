import {CardPowerType, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'WorkerAnt',
    title: 'Worker Ant',
    powerType: CardPowerType.Ants,
    power: 1,
    health: 2,
    tribes: [Tribe.Insect],
    cost: 1,
    currency: Currency.Blood,
});
