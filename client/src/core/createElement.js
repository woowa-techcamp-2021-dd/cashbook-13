import { subscribe } from './vm';

export const componentRerender = {};
const callbackQueue = [];

export const createElement = (component, props = {}) => {
	const { key, render, didAfterRender } = component(props);
	let $DOM = render();

	const reRender = () => {
		const $newDOM = render();
		$DOM.parentNode.replaceChild($newDOM, $DOM);
		$DOM = $newDOM;
	};
	subscribe(key, () => reRender(key));

	componentRerender[key] = reRender;
	callbackQueue.push(didAfterRender);

	return $DOM;
};

export const reRender = (key) => {
	componentRerender[key]();
};
