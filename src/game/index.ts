import * as blueprints from './cards';
import {CardSpawner} from './card-spawner';
import {Sequencer} from './sequencer';

export class GameContext {
    #isInitialized = false;
    #cardSpawner: CardSpawner;
    #sequencer: Sequencer;

    get isInitialized() {
        return this.#isInitialized;
    }

    get cardSpawner() {
        return this.#cardSpawner;
    }

    get sequencer() {
        return this.#sequencer;
    }

    initialize() {
        if (this.#isInitialized) {
            throw new Error('Game context is already initialized');
        }

        this.#isInitialized = true;

        this.#sequencer = new Sequencer();

        this.#cardSpawner = new CardSpawner({
            blueprints: Object.values(blueprints),
        });
    }

}

export const game = new GameContext();
