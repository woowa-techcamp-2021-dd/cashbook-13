import html from './core/jsx';
import { createElement } from './core/createElement';
import { appState } from './sample/counterVM';
import Main from './pages/main';

export default function App() {
	const key = appState;

	const render = () => {
		return html`<div id="parent">${createElement(Main)}</div>`;
	};

	return { key, render };
}
