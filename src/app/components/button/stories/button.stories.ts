// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    type: {
      control: 'radio', options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ]
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  label: 'Click',
  type: 'primary',
  size: 'md'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click',
  type: 'secondary',
  size: 'md'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Click',
  type: 'success',
  size: 'md'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Click',
  type: 'danger',
  size: 'md'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Click',
  type: 'warning',
  size: 'md'
};

export const Info = Template.bind({});
Info.args = {
  label: 'Click',
  type: 'info',
  size: 'md'
};

export const Light = Template.bind({});
Light.args = {
  label: 'Click',
  type: 'light',
  size: 'md'
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Click',
  type: 'dark',
  size: 'md'
};

// export const Large = Template.bind({});
// Large.args = {
//   // size: 'large',
//   // label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   // size: 'small',
//   // label: 'Button',
// };
