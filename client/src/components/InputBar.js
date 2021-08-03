import html from '../core/jsx';
import { createElement } from '../core/createElement';
import { appState } from '../sample/counterVM';
import InputItem from './InputItem';
import ImageButton from './ImageButton';

export default function InputBar() {
	const key = appState;

	const render = () => {
		return html`<div class="inputbar">
			${createElement(InputItem, {
				inputType: 'text',
				itemType: 'inputbar-item-first',
				label: '일자',
				class: 'inputbar-date',
			})}
			${createElement(InputItem, {
				inputType: 'dropdown',
				itemType: 'inputbar-item',
				label: '분류',
				class: 'inputbar-category',
			})}
			${createElement(InputItem, {
				inputType: 'text',
				itemType: 'inputbar-item',
				label: '내용',
				class: 'inputbar-content',
			})}
			${createElement(InputItem, {
				inputType: 'dropdown',
				itemType: 'inputbar-item',
				label: '결제수단',
				class: 'inputbar-payment',
			})}
			${createElement(InputItem, {
				inputType: 'amount',
				itemType: 'inputbar-item-last',
				label: '금액',
				class: 'inputbar-amount',
				imgClass: 'inputbar-io',
			})}
			${createElement(ImageButton, {
				class: 'inputbar-save',
				name: 'save-button-large-default',
			})}
		</div>`;
	};

	return { key, render };
}

// TODO: 아이템별 이벤트
