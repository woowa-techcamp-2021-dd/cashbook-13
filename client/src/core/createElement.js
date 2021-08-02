import { subscribe } from './vm';

export const componentRerenders = {};
const didMountCallbackQueue = new Set();

export const createElement = (component, props = {}) => {
	const { key: componentKey, render, didMount } = component(props);
	if (!render) throw Error('component는 반드시 render 함수를 포함해야합니다');

	let $DOM = render();

	if (didMount) {
		didMountCallbackQueue.add(didMount);
	}

	if (!componentKey) {
		return $DOM;
	}

	const reRender = () => {
		const $newDOM = render();
		$DOM.parentNode.replaceChild($newDOM, $DOM);
		$DOM = $newDOM;
		if (didMount) {
			didMountCallbackQueue.add(didMount);
		}
		excuteDidMountCallbackQueue();
	};
	subscribe(componentKey, () => reRender(componentKey));

	componentRerenders[componentKey] = reRender;

	return $DOM;
};

export const reRender = (componentKey) => {
	componentRerenders[componentKey]();
};

export const excuteDidMountCallbackQueue = () => {
	didMountCallbackQueue.forEach((callback) => callback());
	didMountCallbackQueue.clear();
};
