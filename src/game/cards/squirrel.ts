import {CardKind, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Squirrel',
    title: 'Squirrel',
    tribes: [Tribe.Squirrel],
    kind: CardKind.Special,
    health: 1,
});
