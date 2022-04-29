import {Story, Meta} from '@storybook/angular';
import {BellComponent} from './bell.component';
import {action} from '@storybook/addon-actions';
import {withContainer} from '../../../decorators';

export default {
    title: 'Components/BellComponent',
    component: BellComponent,
    decorators: [withContainer({margin: '3rem'})]
} as Meta;

const actions = {
    bellClick: action('bellClick'),
};

const Template: Story<BellComponent> = (args: BellComponent) => ({
    props: {...args, ...actions},
});

export const Default = Template.bind({});
Default.args = {
    disabled: false
};
