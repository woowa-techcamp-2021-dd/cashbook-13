import { initStoreState } from '../core/store';

export const authState = initStoreState({
	key: 'auth',
	defaultValue: 'signIn',
});
