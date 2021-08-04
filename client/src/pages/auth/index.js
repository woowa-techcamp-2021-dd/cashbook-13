import html from '@/core/jsx';
import './style.scss';

import { useState, useSetState } from '@/core/vm';

import { authVMState } from '@/vm/authVM';

import { requestSignup, requestSignin } from '@/utils/request';
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
		isVaildInput: { signup, signin },
		errorMessage,
	} = state;

	switch (auth) {
		case 'signin':
			return html`<div id="auth-signin">
				<form name="signin">
					<input
						id="signin-username"
						class="input large"
						type="text"
						placeholder="아이디를 입력해주세요"
						value=${inputValue}
						autofocus
					/>
					<div class="box-id-error">${signin ? errorMessage : ''}</div>
					<button
						class="btn large"
						onClick=${onSubmitForm('signin', 'signin-username')}
					>
						로그인
					</button>
				</form>
				<a href="/" class="btn large github">GitHub 로그인</a>
				<div id="footer">
					<div>아이디 찾기</div>
					<div
						onClick=${() => {
							setState({ auth: 'signup' });
						}}
					>
						회원가입
					</div>
				</div>
			</div>`;
		case 'signup':
			return html`<div id="auth-signup">
				<form name="signup">
					<input
						id="signup-username"
						class="input large"
						type="text"
						placeholder="영문, 숫자 조합 6~15자"
						value=${inputValue}
						oninput="this.reportValidity()"
						oninvalid=${onInputUsername}
						pattern="^[a-zA-Z](?=.{0,14}[0-9])[0-9a-zA-Z]{5,14}$"
						required
					/>
					<div class="box-id-error">${signup ? errorMessage : ''}</div>
					<button
						class="btn large"
						onClick=${onSubmitForm('signup', 'signup-username')}
					>
						회원가입 하기
					</button>
				</form>
			</div>`;
		default:
			throw Error('');
	}
};

const onInputUsername = ({ target }) => {
	const isValid = target.validity.patternMismatch;
	target.setCustomValidity(isValid ? MESSAGE.INVAILD_NICKNAME : '');
};

const onSubmitForm = (formID, inputID) => async (e) => {
	const setState = useSetState(authVMState);

	e.preventDefault();
	const inputName = getFormData(formID, inputID);

	try {
		vaildateName(inputName);
		const res =
			formID === 'signup'
				? await requestSignup(inputName)
				: await requestSignin(inputName);

		goMain(res);
	} catch (err) {
		const { message } = err.data;
		setState({
			isVaildInput: {
				signup: formID === 'signup',
				signin: formID === 'signin',
			},
			errorMessage: message,
		});
	}
};
const goMain = (res) => {
	console.log('회원가입이면 로그인으로, 로그인이면 메인으로');
};
const getFormData = (formId, inputID) => {
	const form = document.forms[formId];
	return form.elements[inputID].value;
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
};
