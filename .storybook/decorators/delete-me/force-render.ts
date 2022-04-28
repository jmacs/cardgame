import {Subject, Subscription} from 'rxjs';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    NgZone,
    OnDestroy,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

/**
 * force the re-rendering of the story's components.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'sb-force-rendering',
    template: '<ng-container #outlet></ng-container>',
})
export class ForceRender implements AfterViewInit, OnDestroy {
    @ContentChild(TemplateRef) public template: TemplateRef<any>
    @ViewChild('outlet', { read: ViewContainerRef }) outletRef: ViewContainerRef

    public static render$: Subject<void> = new Subject<void>()
    private subscription: Subscription = new Subscription()

    constructor(private ngZone: NgZone) {}

    public ngAfterViewInit(): void {
        this.doRender()
        this.subscription.add(ForceRender.render$.subscribe(() => this.doRender()))
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

    private doRender(): void {
        // storybook re-rendering can be triggered outside from the angular zone
        // we need to re-enter the angular zone to ensure the components are still interactive
        this.ngZone.run(() => {
            this.outletRef.clear()
            this.outletRef.createEmbeddedView(this.template)
        })
    }
}

export function forceRender() {
    ForceRender.render$.next();
}

export function withForceRender() {
    return (story: any) => {
        const { moduleMetadata = {}, template = '', props = {}, ...rest } = story();
        const { declarations = [] } = moduleMetadata;
        moduleMetadata.declarations = [...declarations, ForceRender];
        return {
            ...rest,
            props,
            moduleMetadata,
            template: `<sb-force-rendering><ng-template>${template}</ng-template></sb-force-rendering>`,
        }
    }
}
