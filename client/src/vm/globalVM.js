import { initVMState } from '../core/vm';
import { isSigninState } from '../store/globalStore';

export const appState = initVMState({
	key: 'app',
	targets: [isSigninState],
});
