import html from '../../core/jsx';
import { createElement } from '../../core/createElement';
import { recordState } from '../../vm/recordVM';
import RecordListHeader from '../RecordListHeader';
import RecordListItem from '../RecordListItem';
import { useState } from '../../core/vm';
import getDayOfWeek from '../../utils/getDayOfWeek';
import './style.scss';
import setMoneyFormat from '../../utils/setMoneyFormat';

export default function RecordList() {
	const key = recordState;

	const render = () => {
		const [state, setState] = useState(key);

		const { records, dailyIn, dailyOut } = state;

		let prevDay = 32;

		return html`<div class="record-list">
			${records.map((record) => {
				const el = document.createElement('div');
				const day = Number(record.date.slice(8, 10));
				const dayOfWeek = getDayOfWeek(new Date(record.date).getDay());
				if (day < prevDay) {
					const header = createElement(RecordListHeader, {
						month: Number(record.date.slice(5, 7)),
						day: day,
						dayofweek: dayOfWeek,
						totalIn: setMoneyFormat(dailyIn[day]),
						totalOut: setMoneyFormat(dailyOut[day]),
					});
					el.appendChild(header);
					prevDay = day;
				}

				const item = createElement(RecordListItem, {
					category: '문화/여가',
					content: record.contents,
					payment: '현대카드',
					io: record['I/O'],
					amount: setMoneyFormat(record.amount),
				});
				el.appendChild(item);

				return el;
			})}
		</div>`;
	};

	return { key, render };
}

// TODO : 데이터 받아오기
