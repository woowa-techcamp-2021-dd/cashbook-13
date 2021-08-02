const globalState = {};

export const initStoreState = ({ key, defaultValue, initialize }) => {
	if (key in globalState) throw Error('이미 존재하는 store key입니다.');
	globalState[key] = {
		_state: defaultValue,
		_observers: new Set(),
	};
	if (initialize) {
		async function init() {
			useSetStoreState(key)(await initialize());
		}
		init();
	}
	return key;
};

export const subscribeStore = (key, observer) => {
	globalState[key]._observers.add(observer);
};

export const unsubscribeStore = (key, observer) => {
	globalState[key]._observers.delete(observer);
};

export const useStoreState = (key) => {
	if (!(key in globalState)) throw Error('존재하지 않는 key값 입니다.');
	return [useStoreValue(key), useSetStoreState(key)];
};

export const useStoreValue = (key) => {
	if (!(key in globalState)) throw Error('존재하지 않는 key값 입니다.');
	return globalState[key]._state;
};

export const useSetStoreState = (key) => (newState) => {
	if (!(key in globalState)) throw Error('존재하지 않는 key값 입니다.');
	if (typeof newState === 'function') {
		const state = useStoreValue(key);
		globalState[key]._state = newState(state);
	} else {
		globalState[key]._state = newState;
	}
	_notify(key);
};

const _notify = (key) => {
	globalState[key]._observers.forEach((observer) => observer());
};
