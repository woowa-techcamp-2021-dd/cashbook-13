import html from '../../core/jsx';
import { createElement } from '../../core/createElement';
import { recordState } from '../../vm/recordVM';
import { useState } from '../../core/vm';
import ImageButton from '../ImageButton';
import setMoneyFormat from '../../utils/setMoneyFormat';

import './style.scss';

export default function RecordHeader() {
	const key = recordState;

	const render = () => {
		const [state, setState] = useState(key);

		const { records, totalIn, totalOut } = state;
		return html`<div class="record-header">
			<div class="record-title">전체 내역 ${records.length}건</div>
			<div class="record-io">
				<div class="record-in">
					${createElement(ImageButton, {
						class: '',
						name: 'save-button-small-active',
						eventHandler: () => {},
					})}
					<span>수입 ${setMoneyFormat(totalIn)}</span>
				</div>
				<div class="record-out">
					${createElement(ImageButton, {
						class: '',
						name: 'save-button-small-active',
						eventHandler: () => {},
					})}
					<span>지출 ${setMoneyFormat(totalOut)}</span>
				</div>
			</div>
		</div>`;
	};

	return { key, render };
}

// TODO: 수입 지출 버튼 이벤트
