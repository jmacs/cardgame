import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RoutingModule} from './routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {StateModule} from './state/state.module';
import {ComponentsModule} from './components/components.module';
import {ScreensModule} from './screens/screens.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        RoutingModule,
        StateModule,
        ComponentsModule,
        ScreensModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
