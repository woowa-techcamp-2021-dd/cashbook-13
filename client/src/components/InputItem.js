import { createElement } from '../core/createElement';
import html from '../core/jsx';
// import { createElement } from './core/createElement';
import { appState } from '../sample/counterVM';
import Imagebutton from './ImageButton';

export default function Inputitem(props) {
	const key = appState;

	const render = () => {
		if (props.inputType === 'text') {
			return html`<div class=${props.itemType}>
				<div class="inputbar-label">${props.label}</div>
				<div class="inputbar-input">
					<input class="${props.class}" type="text" placeholder="입력하세요" />
				</div>
			</div>`;
		} else if (props.inputType === 'dropdown') {
			return html`<div class="${props.itemType}">
				<div class="inputbar-label">${props.label}</div>
				<div class="${props.class}">
					<select class="inputbar-dropdown">
						<option value="">선택하세요</option>
						<option value="생활">생활</option>
						<option value="식비">식비</option>
						<option value="교통">교통</option>
						<option value="쇼핑/뷰티">쇼핑/뷰티</option>
						<option value="의료/건강">의료/건강</option>
						<option value="문화/여가">문화/여가</option>
						<option value="미분류">미분류</option>
					</select>
				</div>
			</div>`;
		} else if (props.inputType === 'amount') {
			return html`<div class="${props.itemType}">
				<div class="inputbar-label">${props.label}</div>
				<div class="inputbar-input">
					${createElement(Imagebutton, {
						class: props.imgClass,
						name: 'plus',
					})}
					<input class="${props.class}" type="text" placeholder="입력하세요" />
					원
				</div>
			</div>`;
		} else {
			return html`<div></div>`;
		}
	};

	return { key, render };
}

// TODO: 카테고리, 결제수단 드롭박스 새로 만들지 말지 결정 & dropdown generate by data
