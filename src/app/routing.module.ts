import {NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {EncounterScreen} from './screens/encounter/encounter.screen';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'encounter'
    },
    {
        path: 'encounter',
        component: EncounterScreen
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        relativeLinkResolution: 'legacy'
    })],
    exports: [RouterModule]
})
export class RoutingModule {}
