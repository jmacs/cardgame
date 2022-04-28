import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'TurkeyVulture',
    title: 'Turkey Vulture',
    health: 3,
    power: 3,
    tribes: [Tribe.Avian],
    cost: 8,
    currency: Currency.Bone,
    baseAbilities: [Ability.Flying],
});
