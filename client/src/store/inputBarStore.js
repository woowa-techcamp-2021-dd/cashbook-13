import { initStoreState } from '../core/store';

export const inputDateModel = initStoreState({
	key: 'inputDate',
	defaultValue: '',
});

export const selectedCategoryModel = initStoreState({
	key: 'selectedCategory',
	defaultValue: '선택하세요',
});

export const selectedCategoryIDModel = initStoreState({
	key: 'selectedCategoryID',
	defaultValue: 0,
});

export const inputContentModel = initStoreState({
	key: 'inputContent',
	defaultValue: '',
});

export const selectedPaymentModel = initStoreState({
	key: 'selectedPayment',
	defaultValue: '선택하세요',
});

export const selectedPaymentIDModel = initStoreState({
	key: 'selectedPaymentID',
	defaultValue: 0,
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
	defaultValue: [],
	initialize: async () =>
		await fetch('http://3.35.132.151:4000/api/category/categories/default')
			.then((res) => res.json())
			.then((data) => {
				return data.categories;
			}),
});

export const userCategoryModel = initStoreState({
	key: 'userCategory',
	defaultValue: [],
});

export const userPaymentModel = initStoreState({
	key: 'userPayment',
	defaultValue: [{ name: '현금' }],
});

export const lastFocusInputModel = initStoreState({
	key: 'lastFocusInput',
	defaultValue: '',
});
