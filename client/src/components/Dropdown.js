import html from '../core/jsx';
import { appState } from '../sample/counterVM';

export default function Dropdown(props) {
	const key = appState;

	const render = () => {
		return html`<div class="dropdown">
			<ul class="dropdown-list">
				${props.list.map(
					(el) => html`<li class="dropdown-list-item"><div>${el}</div></li>`
				)}
				<li class="dropdown-add">
					<div>추가하기</div>
					<img src="./src/assets/images/cancel.svg" alt="" />
				</li>
			</ul>
		</div>`;
	};

	return { key, render };
}

// TODO: props로 받아서 이벤트 등록 / props.list로 목록 받기?
