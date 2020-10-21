import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index'
import { storiesOf } from '@storybook/react';
import ButtonReadme from './README.md'

export default {
  title: 'Button',
  component: Button,
};

const Text = () => <Button onClick={action('button click')}>Hello Button</Button>;



storiesOf("Button Component", module)
.addParameters({
  readme: {
    codeTheme: 'github',
    content: ButtonReadme,
    //sidebar: ButtonReadme,
    //includePropTables:[Button.defaultProps],
  },
})
.add('测试Button', () => Text())
