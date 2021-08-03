import { initVMState } from '../core/vm';

import { authState } from '../store/authStore';

export const authVMState = initVMState({
	key: 'auth',
	targets: [authState],
});
