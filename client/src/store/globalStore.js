import { initStoreState } from '../core/store';

export const isSigninState = initStoreState({
	key: 'isSignin',
	defaultValue: false,
});
