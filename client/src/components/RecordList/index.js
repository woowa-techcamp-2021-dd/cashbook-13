import html from '../../core/jsx';
import { createElement } from '../../core/createElement';
import { appState } from '../../sample/counterVM';
import RecordListHeader from '../RecordListHeader';
import RecordListItem from '../RecordListItem';
import './style.scss';

export default function RecordList() {
	const key = appState;

	const render = () => {
		return html`<div class="record-list">
			${createElement(RecordListHeader, {
				month: 7,
				day: 15,
				dayofweek: '목',
				totalIn: '56,240',
				totalOut: '56,240',
			})}
			${createElement(RecordListItem, {
				category: '문화/여가',
				content: '스트리밍 서비스 정기 결제',
				payment: '현대카드',
				io: 'out',
				amount: '10,900',
			})}
		</div>`;
	};

	return { key, render };
}

// TODO : 데이터 받아오기
