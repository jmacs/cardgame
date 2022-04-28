import {Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Coyote',
    title: 'Coyote',
    health: 1,
    power: 2,
    tribes: [Tribe.Canine],
    cost: 4,
    currency: Currency.Bone,
});
