import html from '../core/jsx';
import { useState } from '../core/vm';
import { listState } from './counterVM';

export default function List() {
	const key = listState;

	const render = () => {
		const [state, setState] = useState(key);
		const { list } = state;

		return html`<ul id=${key}>
			<div
				onClick=${() =>
					setState({
						list: [...list, list.length + 1],
					})}
			>
				more
			</div>
			${list.map((el) => html`<li>${el}</li>`)}
		</ul>`;
	};

	return { key, render };
}
