import { initStoreState } from '../core/store';

export const count = initStoreState({
	key: 'count',
	defaultValue: 0,
});

export const countName = initStoreState({
	key: 'countName',
	defaultValue: '카운퉈',
});

export const list = initStoreState({
	key: 'list',
	defaultValue: [],
	initialize: async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
		const sample = res.json();
		return sample;
	},
});

export const test = initStoreState({
	key: 'test',
	defaultValue: { test: 1 },
});

export const modelOne = initStoreState({
	key: 'one',
	defaultValue: 'one',
});

export const modelTwo = initStoreState({
	key: 'two',
	defaultValue: 'two',
});

export const modelThree = initStoreState({
	key: 'three',
	defaultValue: 'three',
});
