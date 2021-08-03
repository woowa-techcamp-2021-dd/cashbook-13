import html from './core/jsx';

export default function Child(el) {
	const id = `child-${el}`;
	return html`<div id=${id}>자식입니다 ${el}</div>`;
}
