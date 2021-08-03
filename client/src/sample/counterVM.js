import { initVMState } from '../core/vm';
import {
	count,
	countName,
	list,
	test,
	modelOne,
	modelTwo,
	modelThree,
} from './counterStore';

export const oneTwo = initVMState({
	key: 'oneTwo',
	targets: [modelOne, modelTwo],
});

export const twoThree = initVMState({
	key: 'towThree',
	targets: [modelTwo, modelThree],
});

export const counterState = initVMState({
	key: 'counter',
	targets: [count, countName],
});

export const appState = initVMState({
	key: 'app',
	targets: [],
});

export const testState = initVMState({
	key: 'test',
	targets: [test, count],
});

export const listState = initVMState({
	key: 'list',
	targets: [
		{
			target: list,
			custom: (list) => {
				return list.slice(0, 10);
			},
		},
		test,
	],
});

export const one = initVMState({
	key: 'one',
	targets: [],
});
