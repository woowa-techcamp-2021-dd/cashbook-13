import html from '@/core/jsx';
import { createElement } from '@/core/createElement';

import { appState } from './vm/globalVM';

import Main from './pages/main';
import Auth from './pages/auth';

import { useValue } from './core/vm';

export default function App() {
	const key = appState;

	const render = () => {
		const state = useValue(key);
		const { isSignin } = state;
		return html`<div id="parent">
			${createElement(isSignin ? Main : Auth)}
		</div>`;
	};

	return { key, render };
}
