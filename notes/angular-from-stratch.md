# Angular from Scratch

Angular without angular cli for Angular 12.x and webpack 5.x:
- https://www.edc4it.com/blog/helloworld-angular2

Install main Angular packages:
```
@angular/core@^12
@angular/common@^12
@angular/compiler@^12
@angular/platform-browser@^12
@angular/platform-browser-dynamic@^12
@angular/router@^12
@angular/forms@^12
rxjs@6
```

Real Word App example for reference:
- https://github.com/gothinkster/angular-realworld-example-app

How Angular DI Works:
- http://nicholasjohnson.com/blog/how-angular2-di-works-with-typescript/

Angular 7 removed core-js reflect polyfill
- https://github.com/angular/angular/issues/26714
- https://blog.angular.io/version-7-of-angular-cli-prompts-virtual-scroll-drag-and-drop-and-more-c594e22e7b8c#f14f

To get DI working:
- ts.config -> `emitDecoratorMetadata=true`
- npm install core-js -D
- Add `import 'core-js/proposals/reflect-metadata';` to polyfill.js

