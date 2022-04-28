import {getStore, getStoreByName, Store} from '@datorama/akita';
import {withRenderCallback} from './render-callback';
import {Constructor} from '@datorama/akita/src/lib/types';

export function withAkitaStore<TStore extends Store>(storeClass: Constructor<TStore>, callback: (store: TStore) => void) {
    return withRenderCallback(() => {
        try {
            const store = getStore<TStore>(storeClass);
            callback(store);
        } catch (err) {
            console.error('Could not resolve Akita store');
            console.error(err);
        }
    });
}

export function withAkitaStores(storeNames: string[], callback: (stores: any) => void) {
    return withRenderCallback(() => {
        const stores = storeNames.reduce((stores, name) => {
            stores[name] = tryGetStoreByName(name);
            return stores;
        }, {});
        callback(stores);
    });
}

function tryGetStoreByName(name) {
    try {
        return getStoreByName(name);
    } catch (err) {
        console.error(`Could not resolve Akita store with name "${name}"`);
        return null;
    }
}
