import html from '@/core/jsx';
import './style.scss';

import { useState } from '@/core/vm';
import { authVMState } from '@/vm/authVM';

import { requestSignUp } from '@/utils/request';
import errorGenerator from '@/utils/errorGenerator';
import { MESSAGE, REGEX } from '@/config/constant';

export default function Auth() {
	const key = authVMState;

	const render = () => {
		const [state, setState] = useState(key);

		return html`<div id="page-auth">
			<h1>우아한 가계부</h1>
			${renderAuth(state, setState)}
		</div>`;
	};

	return { key, render };
}

const renderAuth = (state, setState) => {
	const {
		auth,
		inputValue,
		isVaildInput: { signUp, signIn },
		errorMessage,
	} = state;

	const SignupHandler = (e) => {
		e.preventDefault();
		const form = document.forms.signup;
		const inputName = form.elements['user-name'].value;

		try {
			if (vaildateName(inputName)) {
				requestSignUp(inputName);
			}
		} catch (err) {
			const { message } = err;

			setState({
				isVaildInput: { signUp: true, signIn: false },
				errorMessage: message,
			});
		}
	};

	switch (auth) {
		case 'signIn':
			return html`<div id="auth-signin">
				<form>
					<input
						class="input large"
						type="text"
						placeholder="아이디를 입력해주세요"
						value=${inputValue}
						autofocus
					/>
					<div class="box-id-error">${signIn ? 'error' : ''}</div>
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
				<form action="" name="signup">
					<input
						id="user-name"
						class="input large"
						type="text"
						placeholder="영문, 숫자 조합 6~15자"
						value=${inputValue}
						oninput="this.reportValidity()"
						oninvalid=${inputHandler}
						pattern="^[a-zA-Z](?=.{0,14}[0-9])[0-9a-zA-Z]{5,14}$"
						required
					/>
					<div class="box-id-error">${signUp ? errorMessage : ''}</div>
					<button class="btn large" onClick=${SignupHandler}>
						회원가입 하기
					</button>
				</form>
			</div>`;
		default:
	}
};

const inputHandler = ({ target }) => {
	const isValid = target.validity.patternMismatch;
	target.setCustomValidity(isValid ? MESSAGE.INVAILD_NICKNAME : '');
};

const vaildateName = (name) => {
	if (!REGEX.USER_NAME_FORM.test(name)) {
		throw errorGenerator({
			message: MESSAGE.INVAILD_NICKNAME_FORM,
			code: 'wrong-input-form',
		});
	}
	if (name.length < 6 || name.length > 15) {
		throw errorGenerator({
			message: MESSAGE.INVAILD_NICKNAME_LENGTH,
			code: 'wrong-input-length',
		});
	}
	return true;
};
