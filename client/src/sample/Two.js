import html from '../core/jsx';
import { useState } from '../core/vm';
import { twoThree } from './counterVM';

export default function Two() {
	const key = twoThree;

	const render = () => {
		const [state, setState] = useState(key);
		const { two, three } = state;

		return html` <div>
			<div
				onClick=${() => {
					setState({ two: '바뀐 two' });
				}}
			>
				two 바꾸기
			</div>
			<div
				onClick=${() => {
					setState({ three: '바뀐 three' });
				}}
			>
				three 바꾸기
			</div>
			<div
				onClick=${() => {
					setState({ two: '한 번에 바뀐 two2', three: '한 번에 바뀐 three2' });
				}}
			>
				two, three 둘 다 바꾸기
			</div>
			<h2>${two}</h2>
			<h2>${three}</h2>
		</div>`;
	};

	return { key, render };
}
