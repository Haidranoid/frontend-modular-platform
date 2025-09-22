import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from '@storybook/react-webpack5'
import { ReduxProvider } from '#providers'
import { configureAppStore } from '#utils'
import { Reducer } from '@reduxjs/toolkit'

interface StoreConfig<S, R extends Reducer<S>> {
  rootReducer: R
  initialState?: S
}

export interface WithReduxParameters {
  storeConfig?: StoreConfig<any, any>
}

export const withRedux: DecoratorFunction<ReactRenderer> = (Story, { parameters }) => {
  if (parameters?.disableGlobalDecorators) return <Story />
  if (parameters?.withRedux?.disable) return <Story />

  const storeConfig = (parameters as WithReduxParameters).storeConfig

  const store = configureAppStore({
    rootReducer: storeConfig?.rootReducer,
    initialState: storeConfig?.initialState,
  })

  return (
    <ReduxProvider store={store}>
      <Story />
    </ReduxProvider>
  )
}

/*
// .storybook/reduxDecorator.js
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore'; // Adjust path as needed

const withRedux = (Story, context) => {
  const store = configureStore(context.args.initialState || {}); // Allows passing initial state from stories
  return <Provider store={store}>{Story()}</Provider>;
};

export default withRedux;


// .storybook/preview.js
import { withRedux } from './reduxDecorator'; // Adjust path as needed

export const decorators = [withRedux];



// MyComponent.stories.js
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../configureStore'; // Adjust path as needed
import MyComponent from './MyComponent';

const store = configureStore(); // Create your store here

export default {
  component: MyComponent,
  title: 'MyComponent',
  decorators: [(Story) => <Provider store={store}>{Story()}</Provider>],
};

export const Default = {};
*/
