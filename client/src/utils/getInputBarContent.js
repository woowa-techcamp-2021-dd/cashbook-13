export default function getInputBarContent(obj) {
	return {
		...obj,
		inputAmount: document.querySelector('.inputbar-amount').value,
		inputContent: document.querySelector('.inputbar-content').value,
		inputDate: document.querySelector('.inputbar-date').value,
	};
}