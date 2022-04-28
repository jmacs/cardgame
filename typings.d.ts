declare module '*.scss';

declare module '*.html' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare const $PRODUCTION: string;
declare const $APPLICATION: string;
declare const $VERSION: string;
