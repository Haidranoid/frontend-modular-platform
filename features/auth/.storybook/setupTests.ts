import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from './preview';

setProjectAnnotations([globalStorybookConfig, {parameters: { withStorybookContext: { disable: true }}}]);
