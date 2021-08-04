import { initStoreState } from '../core/store';

export const authState = initStoreState({
	key: 'auth',
	defaultValue: 'signIn',
});

export const inputValueState = initStoreState({
	key: 'inputValue',
	defaultValue: '',
});

export const isVaildInputState = initStoreState({
	key: 'isVaildInput',
	defaultValue: {
		signUp: false,
		signIn: false,
	},
});

export const errorMessageState = initStoreState({
	key: 'errorMessage',
	defaultValue: '',
});
