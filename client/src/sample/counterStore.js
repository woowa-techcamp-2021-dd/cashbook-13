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
	defaultValue: [1, 2, 3, 4],
});

export const test = initStoreState({
	key: 'test',
	defaultValue: { test: 1 },
});

export const modelOne = initStoreState({
	key: 'one',
	defaultValue: 'one',
});

export const modelTow = initStoreState({
	key: 'two',
	defaultValue: 'two',
});

export const modelThree = initStoreState({
	key: 'three',
	defaultValue: 'three',
});
