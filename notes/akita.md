# Akita

## Links
- https://github.com/datorama/akita
- https://datorama.github.io/akita/docs/store
- https://stackblitz.com/edit/akita-todos-app?file=src%2Fapp%2Ftodos%2Ftodo.component.ts


## Storybook + Akita
Wrote a decorator that returns Akita stories.

Setting data in the store works fine but nothing is rendering to the DOM. 

Debugged Akita source + Rxjs and everything seems to be working as expected.

Tracked issue down to Angular's change detection

Scoured the internet for ways to force change detection. Came cross this:
- https://stackoverflow.com/questions/64608930/re-render-component-after-change-in-custom-storybook-add-on

I'll need time to grok wtf is going on in the `ForceRender` component... 

The akita decorator + force-render decorator combo is working for now.

---

Figured out a more elegant solution
https://github.com/jmacs/cardgame/blob/main/.storybook/decorators/angular-service.ts
