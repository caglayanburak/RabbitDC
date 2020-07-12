import configureStoreDev from './configureStore.dev';

const selectedConfigureStore = configureStoreDev;

export const { configureStore } = selectedConfigureStore;

export const { history } = selectedConfigureStore;
