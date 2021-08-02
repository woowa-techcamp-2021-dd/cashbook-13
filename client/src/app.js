import html from './core/jsx';
import { createElement } from './core/createElement';
import { appState } from './sample/counterVM';
import One from './sample/One';
import Two from './sample/Two';

export default function App() {
	const key = appState;

	const render = () => {
		return html`<div id="parent">
			<h1>테스트용</h1>
			${createElement(One)} ${createElement(Two)}
		</div>`;
	};

	return { key, render };
}
