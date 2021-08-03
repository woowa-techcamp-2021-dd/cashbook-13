import html from '../../core/jsx';

export default function ImageButton(props) {
	const render = () => {
		return html`<span class="image-button" onclick="${props.eventHandler}">
			<img class="${props.class}" src="./src/public/images/${props.name}.svg" />
		</span>`;
	};

	return { render };
}

// TODO: props로 콜백 받아서 클릭 이벤트 등록
