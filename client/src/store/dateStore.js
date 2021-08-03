import { initStoreState } from '../core/store';

// export const dateNow = initStoreState({
// 	key: 'dateNow',
// 	defaultValue: {
// 		year: new Date().getFullYear(),
// 		month: new Date().getMonth(),
// 		day: new Date().getDay(),
// 	},
// });

export const yearModel = initStoreState({
	key: 'year',
	defaultValue: new Date().getFullYear(),
});

export const monthModel = initStoreState({
	key: 'month',
	defaultValue: new Date().getMonth(),
});

export const dayModel = initStoreState({
	key: 'day',
	defaultValue: new Date().getDay(),
});
