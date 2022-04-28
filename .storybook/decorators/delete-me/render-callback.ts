import addons from "@storybook/addons";
import {STORY_RENDERED} from '@storybook/core-events';

export const withRenderCallback = (callback) => {
    return (Story) => {
        addons.getChannel().once(STORY_RENDERED, callback);
        return Story();
    };
};
