export default function setFocus(className) {
	if (className !== '') {
		const $el = document.querySelector(`.${className}`);
		$el.focus();
		const val = $el.value;
		$el.value = '';
		$el.value = val;
	}
}
