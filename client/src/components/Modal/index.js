import html from '../../core/jsx';
import controlModal from '../../utils/controlModal';
import submitModal from '../../utils/submitModal';
import './style.scss';

export default function Modal(props) {
	const render = () => {
		return html`<div class="modal">
			<div class="modal-box">
				<div class="modal-title">추가하실 분류를 입력해주세요</div>
				<div>
					<input class="modal-input" type="text" placeholder="입력하세요" />
				</div>
				<div class="modal-row">
					<button
						class="modal-cancel"
						onclick="${() => {
							controlModal(false, null);
						}}"
					>
						취소
					</button>
					<button
						class="modal-submit"
						onclick="${() => {
							submitModal();
						}}"
					>
						등록
					</button>
				</div>
			</div>
		</div>`;
	};

	return { render };
}
