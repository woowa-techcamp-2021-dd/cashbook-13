import html from '../../core/jsx';
import { useState } from '../../core/vm';
import { createElement } from '../../core/createElement';
import { recordState } from '../../vm/recordVM';
import ImageButton from '../ImageButton';
import calculateMonth from '../../utils/calculateMonth';
import './style.scss';
import getRecord from '../../utils/getRecord';

export default function MainHeader() {
	const key = recordState;

	const render = () => {
		const [state, setState] = useState(key);
		const { date } = state;

		return html`<header class="header">
			<div class="header-title">우아한 가계부</div>
			<span class="header-row">
				${createElement(ImageButton, {
					class: 'arrow-left',
					name: 'arrow-left',
					eventHandler: async () => {
						setState(
							await getRecord(calculateMonth(date.year, date.month, false))
						);
					},
				})}
				<span class="header-date">
					<span class="header-month">${date.month}월</span>
					<span class="header-year">${date.year}</span>
				</span>
				${createElement(ImageButton, {
					class: 'arrow_right',
					name: 'arrow-right',
					eventHandler: async () => {
						setState(
							await getRecord(calculateMonth(date.year, date.month, true))
						);
					},
				})}
			</span>
			<span class="header-tab">
				${createElement(ImageButton, {
					class: 'header-tab-list',
					name: 'list-active',
				})}
				${createElement(ImageButton, {
					class: 'header-tab-calendar',
					name: 'calendar-default',
				})}
				${createElement(ImageButton, {
					class: 'header-tab-analystic',
					name: 'analystic-default',
				})}
			</span>
		</header>`;
	};

	return { key, render };
}

// TODO : 타이틀 클릭 메인 이동 / 헤더 탭 액티브-디폴트 전환 / arrow left right 이벤트 / header-date 반영
