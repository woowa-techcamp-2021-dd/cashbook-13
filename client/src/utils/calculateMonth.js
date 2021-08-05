export default function calculateMonth(year, month, isAdd) {
	if (isAdd) {
		if (month === 12) {
			return { date: { year: year + 1, month: 1 } };
		} else {
			return { date: { year: year, month: month + 1 } };
		}
	} else {
		if (month === 1) {
			return { date: { year: year - 1, month: 12 } };
		} else {
			return { date: { year: year, month: month - 1 } };
		}
	}
}
