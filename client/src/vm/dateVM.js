import { initVMState } from '../core/vm';
import { yearModel, monthModel, dayModel } from '../store/dateStore';

export const dateNowState = initVMState({
	key: 'dateNow',
	targets: [yearModel, monthModel, dayModel],
});
