export default function getValue(className) {
	if (className.indexOf('date') >= 0) {
		return {
			inputDate: document.querySelector(`.${className}`).value,
			lastFocusInput: className,
		};
	} else if (className.indexOf('content') >= 0) {
		return {
			inputContent: document.querySelector(`.${className}`).value,
			lastFocusInput: className,
		};
	} else if (className.indexOf('amount') >= 0) {
		return {
			inputAmount: document.querySelector(`.${className}`).value,
			lastFocusInput: className,
		};
	}
}
