import html from '../core/jsx';
import { useState } from '../core/vm';
import { counterState } from './counterVM';

export default function Counter() {
	const key = counterState;

	const render = () => {
		const [state, setState] = useState(key);
		const { count, countName } = state;

		return html`<div id=${key}>
			<div>${countName}</div>
			<div>${count}</div>
			<div>
				<div
					id="up"
					onClick=${() => {
						setState({ count: count + 1, countName: '카운티' });
					}}
				>
					+
				</div>
				<div
					id="down"
					onClick=${() => {
						setState({ count: count + -1 });
					}}
				>
					-
				</div>
			</div>
		</div>`;
	};

	return { key, render };
}
