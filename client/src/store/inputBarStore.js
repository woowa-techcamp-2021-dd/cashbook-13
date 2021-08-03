import { initStoreState } from '../core/store';

export const inputDateModel = initStoreState({
	key: 'inputDate',
	defaultValue: '',
});

export const selectedCategoryModel = initStoreState({
	key: 'selectedCategory',
	defaultValue: '선택하세요',
});

export const inputContentModel = initStoreState({
	key: 'inputContent',
	defaultValue: '',
});

export const selectedPaymentModel = initStoreState({
	key: 'selectedPayment',
	defaultValue: '선택하세요',
});

export const selectedIOModel = initStoreState({
	key: 'selectedIO',
	defaultValue: true, // true in / false out
});

export const inputAmountModel = initStoreState({
	key: 'inputAmount',
	defaultValue: '',
});

export const openCategoryModel = initStoreState({
	key: 'openCategory',
	defaultValue: false,
});

export const openPaymentModel = initStoreState({
	key: 'openPayment',
	defaultValue: false,
});

export const basicCategoryModel = initStoreState({
	key: 'basicCategory',
	defaultValue: ['생활', '바른생활'],
});

export const userCategoryModel = initStoreState({
	key: 'userCategory',
	defaultValue: [4, 5, 6],
});

export const userPaymentModel = initStoreState({
	key: 'userPayment',
	defaultValue: ['현금', '현대카드'],
});

export const lastFocusInputModel = initStoreState({
	key: 'lastFocusInput',
	defaultValue: '',
});
