import html from '../../core/jsx';
import { createElement } from '../../core/createElement';
import { appState } from '../../sample/counterVM';
import ImageButton from '../ImageButton';
import './style.scss';

export default function RecordHeader() {
	const key = appState;

	const render = () => {
		return html`<div class="record-header">
			<div class="record-title">전체 내역 13건</div>
			<div class="record-io">
				<div class="record-in">
					${createElement(ImageButton, {
						class: '',
						name: 'save-button-small-active',
					})}
					<span>수입 1,822,480</span>
				</div>
				<div class="record-out">
					${createElement(ImageButton, {
						class: '',
						name: 'save-button-small-active',
					})}
					<span>지출 798,180</span>
				</div>
			</div>
		</div>`;
	};

	return { key, render };
}

// TODO: 수입 지출 버튼 이벤트
