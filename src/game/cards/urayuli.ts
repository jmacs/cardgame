import {Currency} from '../enums';
import {createCardBlueprint, RareCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'Urayuli',
    title: 'Urayuli',
    power: 7,
    health: 7,
    backgroundHref: RareCardBackgroundHref,
    cost: 4,
    currency: Currency.Blood,
});
