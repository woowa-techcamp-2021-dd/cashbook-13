import html from '../../core/jsx';
import { useState } from '../../core/vm';
import controlModal from '../../utils/controlModal';
import getInputBarContent from '../../utils/getInputBarContent';
import selectDropdown from '../../utils/selectDropdown';
import { inputBarState } from '../../vm/inputBarVM';
import Modal from '../Modal';
import './style.scss';

export default function Dropdown(props) {
	const key = inputBarState;

	const render = () => {
		// console.log('dropdown render');
		const [state, setState] = useState(key);

		return html`<div class="dropdown">
			<ul class="dropdown-list">
				${props.basicList.map(
					(el) =>
						html`<li
							class="dropdown-list-item"
							onclick="${() => {
								setState(
									getInputBarContent(
										selectDropdown(el.name, el.id, props.isCategory)
									)
								);
							}}"
						>
							<div>${el.name}</div>
						</li>`
				)}
				${props.customList.map(
					(el) =>
						html`<li
							class="dropdown-list-item"
							onclick="${() => {
								setState(
									getInputBarContent(
										selectDropdown(el.name, el.id, props.isCategory)
									)
								);
							}}"
						>
							<div>
								${el.name}
								<span
									><img
										src="./src/public/images/cancel.svg"
										onclick="${() => {
											console.log('삭제기능');
										}}"
								/></span>
							</div>
						</li>`
				)}
				<li
					class="dropdown-add"
					onclick="${() => {
						controlModal(
							true,
							props.isCategory ? 'modal-category' : 'modal-payment'
						);
					}}"
				>
					<div>추가하기</div>
				</li>
			</ul>
		</div>`;
	};

	return { key, render };
}

// TODO: 삭제 이벤트 / 삭제 후 default값 변경해야함 / 선택하세요 아닐때 색깔 검은색으로
