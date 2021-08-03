import html from '../core/jsx';
import { createElement } from '../core/createElement';
import { appState } from '../sample/counterVM';
import ImageButton from './ImageButton';

export default function MainHeader() {
	const key = appState;

	const render = () => {
		return html`<header>
			<div class="header-title">우아한 가계부</div>
			<span class="header-row">
				${createElement(ImageButton, {
					class: 'arrow-left',
					name: 'arrow-left',
				})}
				<span class="header-date">
					<span class="header-month">7월</span>
					<span class="header-year">2021</span>
				</span>
				${createElement(ImageButton, {
					class: 'arrow_right',
					name: 'arrow-right',
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
