export default function controlModal(open, cls) {
	const $modal = document.querySelector('.modal');
	if ($modal !== null) {
		if (cls === '') {
			cls = $modal.classList[$modal.classList.length - 1];
		}
		if (open) {
			$modal.style.visibility = 'visible';
			$modal.classList.add(cls);
			document.body.style.overflow = 'hidden';
			if (cls === 'modal-category') {
				document.querySelector('.modal-title').innerText =
					'추가하실 분류를 입력해주세요';
			} else {
				document.querySelector('.modal-title').innerText =
					'추가하실 결제수단을 입력해주세요';
			}
		} else {
			$modal.style.visibility = 'hidden';
			$modal.classList.remove(cls);
			document.body.style.overflow = 'scroll';
		}
	}
}
