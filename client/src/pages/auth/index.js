import html from '@/core/jsx';
import './style.scss';

import { useState } from '@/core/vm';
import { authVMState } from '@/vm/authVM';

import { requestSignUp } from '../../utils/request';

export default function Auth() {
	const key = authVMState;

	const render = () => {
		const [state, setState] = useState(key);
		const { auth } = state;

		return html`<div id="page-auth">
			<h1>우아한 가계부</h1>
			${renderAuth(auth, setState)}
		</div>`;
	};

	return { key, render };
}

const renderAuth = (auth, setState) => {
	switch (auth) {
		case 'signIn':
			return html`<div id="auth-signin">
				<form>
					<input
						class="input large"
						type="text"
						placeholder="아이디를 입력해주세요"
					/>
					<div class="box-id-error">error</div>
					<button class="btn large">로그인</button>
				</form>
				<a href="/" class="btn large github">GitHub 로그인</a>
				<div id="footer">
					<div>아이디 찾기</div>
					<div
						onClick=${() => {
							setState({ auth: 'signUp' });
						}}
					>
						회원가입
					</div>
				</div>
			</div>`;
		case 'signUp':
			return html`<div id="auth-signup">
				<form action="">
					<input
						class="input large"
						type="text"
						placeholder="영문, 숫자 조합 6~15자"
					/>
					<div class="box-id-error">error</div>
					<button
						class="btn large"
						onClick=${(e) => {
							e.preventDefault();
							requestSignUp('name123');
						}}
					>
						회원가입 하기
					</button>
				</form>
			</div>`;
		default:
	}
};
