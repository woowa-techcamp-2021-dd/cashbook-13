import { initVMState } from '../core/vm';

import {
	authState,
	inputValueState,
	isVaildInputState,
	errorMessageState,
} from '../store/authStore';

import { isSigninState } from '../store/globalStore';

export const authVMState = initVMState({
	key: 'auth',
	targets: [
		authState,
		inputValueState,
		isVaildInputState,
		errorMessageState,
		isSigninState,
	],
});
