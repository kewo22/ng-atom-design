// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TextInputComponent } from '../text-input.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/TextInput',
  component: TextInputComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    size: {
      // control: 'radio', options: [
      //   'primary',
      //   'secondary',
      //   'success',
      //   'danger',
      //   'warning',
      //   'info',
      //   'light',
      //   'dark',
      // ]
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TextInputComponent> = (args: TextInputComponent) => ({
  props: args,
});

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Small.args = {
  label: 'Label',
  size: 'sm'
};

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Medium.args = {
  label: 'Label',
  size: 'md'
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Large.args = {
  label: 'Label',
  size: 'lg'
};

export const HelperText = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
HelperText.args = {
  label: 'Label',
  size: 'md',
  helperText: 'Required'
};
