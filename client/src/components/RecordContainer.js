import html from '../core/jsx';
import { createElement } from '../core/createElement';
import { appState } from '../sample/counterVM';
import RecordHeader from './RecordHeader';
import RecordList from './RecordList';

export default function RecordContainer() {
	const key = appState;

	const render = () => {
		return html`<div class="record-container">
			${createElement(RecordHeader)} ${createElement(RecordList)}
		</div>`;
	};

	return { key, render };
}
