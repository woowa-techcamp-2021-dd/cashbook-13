import html from '../core/jsx';
import { appState } from '../sample/counterVM';

export default function ImageButton(props) {
	const key = appState;

	const render = () => {
		return html`<span class="image-button" onclick="${props.eventHandler}">
			<img class="${props.class}" src="./src/assets/images/${props.name}.svg" />
		</span>`;
	};

	return { key, render };
}

// TODO: props로 콜백 받아서 클릭 이벤트 등록
