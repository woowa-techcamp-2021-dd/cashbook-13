export default function selectDropdown(content, isCategory) {
	if (isCategory) {
		return { selectedCategory: content, lastFocusInput: '' };
	} else {
		return { selectedPayment: content, lastFocusInput: '' };
	}
}
