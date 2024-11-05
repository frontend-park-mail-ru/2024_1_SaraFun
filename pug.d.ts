
declare module '*.pug' {
    const template: (locals?: any) => string;
    export default template;
}
