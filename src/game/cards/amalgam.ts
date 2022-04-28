import {Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Amalgam',
    title: 'Amalgam',
    health: 3,
    power: 3,
    cost: 2,
    currency: Currency.Blood,
    tribes: [
        Tribe.Avian,
        Tribe.Canine,
        Tribe.Hooved,
        Tribe.Reptile,
        Tribe.Insect,
        Tribe.Squirrel,
    ],
});
