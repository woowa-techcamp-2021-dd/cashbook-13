import { initVMState } from '../core/vm';
import {
	dateModel,
	recordModel,
	dailyInModel,
	dailyOutModel,
	totalInModel,
	totalOutModel,
} from '../store/recordStore';

export const recordState = initVMState({
	key: 'records',
	targets: [
		dateModel,
		recordModel,
		dailyInModel,
		dailyOutModel,
		totalInModel,
		totalOutModel,
	],
});
