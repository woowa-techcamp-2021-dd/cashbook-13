import { subscribeStore, useSetStoreState, useStoreValue } from './store';

const globalVM = {};

export const initVMState = ({ key, targets }) => {
	if (key in globalVM) throw Error('이미 존재하는 vm 키입니다');
	const targetNames = _getTargetName(targets);
	globalVM[key] = {
		_target: targets,
		_state: _combineState(targets),
		_setState: _setState(targetNames),
		_observers: new Set(),
	};

	targetNames.forEach((target) => {
		subscribeStore(target, () => {
			_updateState(key, target);
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
		if (typeof target === 'object') {
			const state = useStoreValue(target.target);
			acc[target.target] = target.custom(state);
		}

		if (typeof target === 'string') acc[target] = useStoreValue(target);

		return acc;
	}, {});

const _updateState = (key, target) => {
	globalVM[key]._state[target] = useStoreValue(target);
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

const _getTargetName = (targets) =>
	targets.map((target) => {
		if (typeof target === 'object') return target.target;
		return target;
	});
