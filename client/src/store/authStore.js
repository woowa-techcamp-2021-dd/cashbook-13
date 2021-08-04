import { initStoreState } from '../core/store';

export const authState = initStoreState({
	key: 'auth',
	defaultValue: 'signin',
});

export const inputValueState = initStoreState({
	key: 'inputValue',
	defaultValue: '',
});

export const isVaildInputState = initStoreState({
	key: 'isVaildInput',
	defaultValue: {
		signup: false,
		signin: false,
	},
});

export const errorMessageState = initStoreState({
	key: 'errorMessage',
	defaultValue: '',
});
