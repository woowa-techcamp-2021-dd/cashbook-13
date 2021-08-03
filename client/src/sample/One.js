import html from '../core/jsx';
import { useState } from '../core/vm';
import { oneTow } from './counterVM';

export default function One() {
	const key = oneTow;

	const render = () => {
		const [state, setState] = useState(key);
		const { one, two } = state;

		return html` <div>
			<div
				onClick=${() => {
					setState({ two: '원에서 바꾼 투' });
				}}
			>원투바꾸기</div>
				<h2>${one}</h2>
				<h2>${two}</h2>
			</div>
		</div>`;
	};

	return { key, render };
}
