import { subscribeStore, useSetStoreState, useStoreValue } from './store';

const globalVM = {};

export const combineState = ({ key, targets }) => {
	if (key in globalVM) throw Error('이미 존재하는 vm 키입니다');
	globalVM[key] = {
		_target: targets,
		_state: _combineState(targets),
		_setState: _setState(targets),
		_observers: new Set(),
	};
	targets.forEach((key2) => {
		subscribeStore(key2, () => {
			_updateState(key, targets);
			_notify(key);
		});
	});
	return key;
};

export const subscribe = (key, observer) => {
	globalVM[key]._observers.add(observer);
};

export const unsubscribe = (key, observer) => {
	globalVM[key]._observers.delete(observer);
};

export const useState = (key) => {
	if (!(key in globalVM)) throw Error('존재하지 않는 vm key값 입니다.');
	return [globalVM[key]._state, globalVM[key]._setState];
};

export const useValue = (key) => {
	if (!(key in globalVM)) throw Error('존재하지 않는 vm key값 입니다.');
	return globalVM[key]._state;
};

export const useSetState = (key) => {
	if (!(key in globalVM)) throw Error('존재하지 않는 vm key값 입니다.');
	return globalVM[key]._setState;
};

const _combineState = (targets) =>
	targets.reduce((acc, target) => {
		acc[target] = useStoreValue(target);
		return acc;
	}, {});

const _updateState = (key, targets) => {
	globalVM[key]._state = _combineState(targets);
};
const _setState = (targets) => (newStates) => {
	for (const [key, newValue] of Object.entries(newStates)) {
		if (!targets.includes(key)) throw Error('변경할 수 없는 타겟입니다.');
		useSetStoreState(key)(newValue);
	}
};

const _notify = (key) => {
	globalVM[key]._observers.forEach((observer) => observer());
};
