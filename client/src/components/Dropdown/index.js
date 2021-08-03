import html from '../../core/jsx';
import './style.scss';

export default function Dropdown(props) {
	const render = () => {
		return html`<div class="dropdown">
			<ul class="dropdown-list">
				${['생활', '생활', '생활'].map(
					(el) => html`<li class="dropdown-list-item"><div>${el}</div></li>`
				)}
				<li class="dropdown-add">
					<div>추가하기</div>
					<img src="./src/public/images/cancel.svg" alt="" />
				</li>
			</ul>
		</div>`;
	};

	return { render };
}

// TODO: props로 받아서 이벤트 등록 / props.list로 목록 받기? / isAddable?
