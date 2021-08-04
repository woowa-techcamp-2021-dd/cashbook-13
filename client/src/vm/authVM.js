import { initVMState } from '../core/vm';

import {
	authState,
	inputValueState,
	isVaildInputState,
	errorMessageState,
} from '../store/authStore';

export const authVMState = initVMState({
	key: 'auth',
	targets: [authState, inputValueState, isVaildInputState, errorMessageState],
});
