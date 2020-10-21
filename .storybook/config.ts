import { configure, addDecorator, addParameters } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { create } from '@storybook/theming';
import '../src/styles/index.scss'
const basicTheme = create({
  base: 'light',
  brandTitle: 'React-Alley',
  brandUrl: 'https://www.baidu.com',
  brandImage: null,
});

addParameters({
  options: {
    // 显示加载项配置的显示面板
    showPanel: true,
     /**
     * 
     * @type {('bottom'|'right')}
   */
    panelPosition: 'bottom',
    theme: basicTheme,
   
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: 'github',
  },
});

addDecorator(addReadme);

const loaderFn = () => {
  const allExports = [];
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
