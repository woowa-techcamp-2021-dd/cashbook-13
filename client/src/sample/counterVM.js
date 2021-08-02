import { combineState } from '../core/vm';
import {
	count,
	countName,
	list,
	test,
	modelOne,
	modelTow,
	modelThree,
} from './counterStore';

export const oneTow = combineState({
	key: 'oneTwo',
	targets: [modelOne, modelTow],
});

export const twoThree = combineState({
	key: 'towThree',
	targets: [modelTow, modelThree],
});

export const counterState = combineState({
	key: 'counter',
	targets: [count, countName],
});

export const appState = combineState({
	key: 'app',
	targets: [],
});

export const testState = combineState({
	key: 'test',
	targets: [test, count],
});

export const listState = combineState({
	key: 'list',
	targets: [list],
});

export const one = combineState({
	key: 'one',
	targets: [],
});
