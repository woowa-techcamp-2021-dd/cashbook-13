export default function setMoneyFormat(money) {
	return money === '' || money === undefined
		? ''
		: money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
