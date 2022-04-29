import {Card, CardBlueprint, cloneCardBlueprint, createCardFromBlueprint} from './card';
import {toMap} from '../utils/arrays';
import {nextIdentity} from '../utils/identity';

type CardSpawnerOptions = {
    blueprints: CardBlueprint[]
};

export class CardSpawner {
    #blueprints: Map<string, CardBlueprint>;

    constructor(options: CardSpawnerOptions) {
        this.#blueprints = toMap<string, CardBlueprint>(options.blueprints, (blueprint) => blueprint.name);
    }

    allBlueprints(): CardBlueprint[] {
        return Array.from(this.#blueprints.values());
    }

    getBlueprint(blueprintName: string): CardBlueprint {
        const blueprint = this.#blueprints.get(blueprintName);
        if (!blueprint) {
            console.error(`card blueprint "${blueprintName}" does not exist.`);
            return null;
        }
        return blueprint;
    }

    cloneBlueprint(blueprintName: string, overrides?: Partial<CardBlueprint>): CardBlueprint {
        const blueprint = this.getBlueprint(blueprintName);
        return blueprint ? cloneCardBlueprint(blueprint, overrides) : null;
    }

    createCardFromBlueprint(blueprintName: string, overrides?: Partial<CardBlueprint>): Card {
        const id = nextIdentity();
        const blueprint = this.getBlueprint(blueprintName);
        return createCardFromBlueprint(id, blueprint, overrides);
    }

}
