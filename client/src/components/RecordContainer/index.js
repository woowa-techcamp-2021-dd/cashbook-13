import html from '../../core/jsx';
import { createElement } from '../../core/createElement';
import RecordHeader from '../RecordHeader';
import RecordList from '../RecordList';
import './style.scss';

export default function RecordContainer() {
	const render = () => {
		return html`<div class="record-container">
			${createElement(RecordHeader)} ${createElement(RecordList)}
		</div>`;
	};

	return { render };
}
