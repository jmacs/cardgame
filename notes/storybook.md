# Storybook

`npx sb init` will error out in made-from-scratch project. Needs angular.json project file.

To install storybook manually:
- Create a new ng app using angular CLI
- create a backup of package.json before installing sb
- run: npx sb init
- add the storybook build targets: https://storybook.js.org/docs/angular/get-started/install
- run storybook to make sure it loads
- diff package.json with the backup to see what modules are added
- copy files and config from the sample ng app to the made-from-scratch project: 
  - copy the packages storybook added to package.json
  - copy the .storybook directory
  - copy the src/stories directory
  - update .storybook/tsconfig.json:
    - update `files`, to include `../typings.d.ts`
    - change `extends` to `../tsconfig.json`
  
angular.json might not be needed to run storybook (sb has a fall back config)

packages storybook adds:
```
"@babel/core": "^7.17.9",
"@compodoc/compodoc": "^1.1.19",
"@storybook/addon-actions": "^6.4.22",
"@storybook/addon-essentials": "^6.4.22",
"@storybook/addon-interactions": "^6.4.22",
"@storybook/addon-links": "^6.4.22",
"@storybook/angular": "^6.4.22",
"@storybook/builder-webpack5": "^6.4.22",
"@storybook/manager-webpack5": "^6.4.22",
"@storybook/testing-library": "0.0.9",
"babel-loader": "^8.2.4",
"@types/jasmine": "~3.8.0",
"@types/node": "^12.11.1",
"tslib": "^2.3.0",
```



More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args

More on args: https://storybook.js.org/docs/angular/writing-stories/args

## Webpack / PostCSS / Storybook Sadness

Can't get PostCSS to work. Some kind of conflict with css-loader versions? No workaround until Storybook updates to PostCSS v8 :( 

Copying some of tailwind's css for now...


## Storybook Angular Rendering and Zones

Angular won't update if state mutations happen outside the "ngZone".

This is key:
```
zone.run(() => {
    service.setSlot(SlotIndex.OpponentSlot1, {
        card: game.cardSpawner.get('Geck')
    });
    run(storybookTest, {service}).then(() => {
        console.log('storybookTest sequence done');
    });
});
```
