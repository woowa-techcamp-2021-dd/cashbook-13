import html from '../../core/jsx';
import { useState } from '../../core/vm';
import { inputBarState } from '../../vm/inputBarVM';
import { createElement } from '../../core/createElement';
import Imagebutton from '../ImageButton';
import './style.scss';
import Dropdown from '../Dropdown';
import getValue from '../../utils/getValue';
import setFocus from '../../utils/setFocus';
import getInputBarContent from '../../utils/getInputBarContent';

export default function Inputitem(props) {
	const key = inputBarState;

	const render = () => {
		console.log('inputitem render');
		const [state, setState] = useState(key);

		const {
			inputDate,
			selectedCategory,
			inputContent,
			selectedPayment,
			selectedIO,
			inputAmount,
			openCategory,
			openPayment,
			basicCategory,
			userCategory,
			userPayment,
		} = state;

		if (props.inputType === 'text') {
			return html`<div class=${props.itemType}>
				<div class="inputbar-label">${props.label}</div>
				<div class="inputbar-input">
					<input
						class="${props.class}"
						type="text"
						placeholder="입력하세요"
						value="${props.class === 'inputbar-date'
							? inputDate
							: inputContent}"
					/>
				</div>
			</div>`;
		} else if (props.inputType === 'dropdown') {
			return html`<div class="${props.itemType}">
				<div class="inputbar-label">${props.label}</div>
				<div
					class="${props.class}"
					onClick="${() => {
						props.label === '분류'
							? setState(
									getInputBarContent({
										openCategory: !openCategory,
										lastFocusInput: '',
									})
							  )
							: setState(
									getInputBarContent({
										openPayment: !openPayment,
										lastFocusInput: '',
									})
							  );
					}}"
				>
					<div class="inputbar-dropdown">
						<div>
							${props.label === '분류' ? selectedCategory : selectedPayment}
						</div>
						<img src="./src/public/images/more.svg" alt="" />
					</div>
					${openCategory && props.label === '분류'
						? createElement(Dropdown, {
								basicList: basicCategory,
								customList: userCategory,
								isCategory: true,
						  })
						: ``}
					${openPayment && props.label !== '분류'
						? createElement(Dropdown, {
								basicList: [],
								customList: userPayment,
								isCategory: false,
						  })
						: ``}
				</div>
			</div>`;
		} else if (props.inputType === 'amount') {
			return html`<div class="${props.itemType}">
				<div class="inputbar-label">${props.label}</div>
				<div class="inputbar-input">
					${createElement(Imagebutton, {
						class: 'inputbar-io',
						name: selectedIO ? 'plus' : 'minus',
						eventHandler: () => {
							setState({ selectedIO: !selectedIO });
						},
					})}
					<input
						class="${props.class}"
						type="text"
						placeholder="입력하세요"
						value="${inputAmount}"
					/>
					<span>원</span>
				</div>
			</div>`;
		} else {
			return html`<div></div>`;
		}
	};
	return { key, render };
}

// TODO:
