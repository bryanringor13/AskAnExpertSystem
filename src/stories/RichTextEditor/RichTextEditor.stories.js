import React from 'react';
import { RichTextEditor } from './RichTextEditor';

export default {
  title: 'Lamarck/RichTextEditor',
  component: RichTextEditor,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <RichTextEditor {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'ContentBox1',
   
};
