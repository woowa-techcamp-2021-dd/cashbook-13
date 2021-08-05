import html from '../../core/jsx';
import './style.scss';

export default function RecordListHeader(props) {
	const render = () => {
		return html` <div class="record-list-header">
			<div class="record-date">
				<div class="record-day">${props.month}월 ${props.day}일</div>
				<div class="record-dayofweek">${props.dayofweek}</div>
			</div>
			<div class="record-date-io">
				<div class="record-date-in">수입 ${props.totalIn}</div>
				<div class="record-date-out">지출 ${props.totalOut}</div>
			</div>
		</div>`;
	};

	return { render };
}
