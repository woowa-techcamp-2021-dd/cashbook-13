import html from '../../core/jsx';
import { createElement } from '../../core/createElement';
import { inputBarState } from '../../vm/inputBarVM';
import InputItem from '../InputItem';
import ImageButton from '../ImageButton';
import saveRecord from '../../utils/saveRecord';
import { recordState } from '../../vm/recordVM';
import { useState } from '../../core/vm';
import './style.scss';
import getInputBarContent from '../../utils/getInputBarContent';

export default function InputBar() {
	const key = inputBarState;

	const render = () => {
		console.log('inputbar render');
		const [state, setState] = useState(key);
		const [state2, setState2] = useState(recordState);

		const {
			inputDate,
			selectedCategoryID,
			inputContent,
			selectedPaymentID,
			selectedIO,
			inputAmount,
		} = state;

		const { records } = state2;

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
			})}
			${createElement(ImageButton, {
				class: 'inputbar-save',
				name: 'save-button-large-default',
				eventHandler: async () => {
					setState(getInputBarContent({})); // 지금은 두번 클릭해야함 saverecord에 값들이 셋 스테이트가 안된 값이라
					setState2({
						records: [
							...records,
							await saveRecord(
								inputDate,
								selectedCategoryID,
								inputContent,
								selectedPaymentID,
								selectedIO,
								inputAmount
							),
						],
					});
				},
			})}
		</div>`;
	};

	return { key, render };
}

// TODO: 아이템별 이벤트
