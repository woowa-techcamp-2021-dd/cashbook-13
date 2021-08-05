import html from '../../core/jsx';
import './style.scss';

export default function RecordListItem(props) {
	const render = () => {
		return html`<div class="record-list-item">
			<div class="record-category">${props.category}</div>
			<div class="record-content">${props.content}</div>
			<div class="record-payment">${props.payment}</div>
			<div class="record-amount">
				${props.io === 'in' ? '' : '-'} ${props.amount}원
			</div>
		</div>`;
	};

	return { render };
}
