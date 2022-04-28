import {Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Bee',
    title: 'Bee',
    power: 1,
    health: 1,
    tribes: [Tribe.Insect],
});
