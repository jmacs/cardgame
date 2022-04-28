import {componentWrapperDecorator} from "@storybook/angular";

type ContainerOptions = {
    margin?: string
    width?: string,
    height?: string,
};

export function withContainer(options: ContainerOptions) {
    let styles = [];

    if (options.margin) {
        styles.push(`margin: ${options.margin}`);
    }

    if (options.width) {
        styles.push(`width: ${options.width}`);
    }

    if (options.height) {
        styles.push(`height: ${options.height}`);
    }

    const css = styles.join(';');
    return componentWrapperDecorator((story) => `<div id="story-container" style="${css}">${story}</div>`);
}
