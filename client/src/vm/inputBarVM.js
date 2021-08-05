import { initVMState } from '../core/vm';
import {
	inputDateModel,
	selectedCategoryModel,
	selectedCategoryIDModel,
	inputContentModel,
	selectedPaymentModel,
	selectedPaymentIDModel,
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
		selectedCategoryIDModel,
		inputContentModel,
		selectedPaymentModel,
		selectedPaymentIDModel,
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
