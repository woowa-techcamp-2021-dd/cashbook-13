import { initVMState } from '../core/vm';
import {
	inputDateModel,
	selectedCategoryModel,
	inputContentModel,
	selectedPaymentModel,
	selectedIOModel,
	inputAmountModel,
	openCategoryModel,
	openPaymentModel,
	basicCategoryModel,
	userCategoryModel,
	userPaymentModel,
	lastFocusInputModel,
} from '../store/inputBarStore';

export const inputBarState = initVMState({
	key: 'inputBar',
	targets: [
		inputDateModel,
		selectedCategoryModel,
		inputContentModel,
		selectedPaymentModel,
		selectedIOModel,
		inputAmountModel,
		openCategoryModel,
		openPaymentModel,
		basicCategoryModel,
		userCategoryModel,
		userPaymentModel,
		lastFocusInputModel,
	],
});
