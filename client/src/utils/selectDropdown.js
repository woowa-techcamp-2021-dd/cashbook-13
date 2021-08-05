export default function selectDropdown(content, id, isCategory) {
	if (isCategory) {
		return {
			selectedCategory: content,
			selectedCategoryID: id,
			lastFocusInput: '',
		};
	} else {
		return {
			selectedPayment: content,
			selectedPaymentID: id,
			lastFocusInput: '',
		};
	}
}
