import { initStoreState } from '../core/store';
import { requestRecord } from '../utils/request';

export const dateModel = initStoreState({
	key: 'date',
	defaultValue: {
		year: Number(new Date().getFullYear()),
		month: Number(new Date().getMonth()),
		day: Number(new Date().getDay()),
	},
});

export const recordModel = initStoreState({
	key: 'records',
	defaultValue: [],
	initialize: requestRecord,
});

export const inRecordModel = initStoreState({
	key: 'inRecord',
	defaultValue: [],
	initialize: () => {
		return [];
	},
});

export const outRecordModel = initStoreState({
	key: 'outRecord',
	defaultValue: [],
	initialize: () => {
		return [];
	},
});

export const dailyInModel = initStoreState({
	key: 'dailyIn',
	defaultValue: [],
	initialize: async () =>
		// todo fix date
		await fetch(
			'http://3.35.132.151:4000/api/record/user/records?date=20210728'
		)
			.then((res) => res.json())
			.then((data) => {
				const totalIn = new Array(32).fill(0);

				data.record.map((row) => {
					if (row['I/O'] === 'in') {
						totalIn[Number(row.date.slice(8, 10))] += Number(row.amount);
					}
					return false;
				});

				return totalIn;
			}),
});

export const dailyOutModel = initStoreState({
	key: 'dailyOut',
	defaultValue: 0,
	initialize: async () =>
		await fetch(
			'http://3.35.132.151:4000/api/record/user/records?date=20210728'
		)
			.then((res) => res.json())
			.then((data) => {
				const totalOut = new Array(32).fill(0);

				data.record.map((row) => {
					if (row['I/O'] === 'out') {
						totalOut[Number(row.date.slice(8, 10))] += Number(row.amount);
					}
					return false;
				});

				return totalOut;
			}),
});

export const totalInModel = initStoreState({
	key: 'totalIn',
	defaultValue: 0,
	initialize: async () =>
		await fetch(
			'http://3.35.132.151:4000/api/record/user/records?date=20210728'
		)
			.then((res) => res.json())
			.then((data) =>
				data.record.reduce(function total(sum, row) {
					if (row['I/O'] === 'in') {
						return (sum += Number(row.amount));
					} else {
						return sum;
					}
				}, 0)
			),
});

export const totalOutModel = initStoreState({
	key: 'totalOut',
	defaultValue: 0,
	initialize: async () =>
		await fetch(
			'http://3.35.132.151:4000/api/record/user/records?date=20210728'
		)
			.then((res) => res.json())
			.then((data) =>
				data.record.reduce(function total(sum, row) {
					if (row['I/O'] === 'out') {
						return (sum += Number(row.amount));
					} else {
						return sum;
					}
				}, 0)
			),
});

// 수정 / 삭제용
export const selectRecordModel = initStoreState({
	key: 'selectRecord',
	defaultValue: '',
});

// 년월로 필터링해서 다 긁어온 다음, 일 비교하면서 헤더랑 아이템 만들면 될 듯
// 총 수입/지출 같은거는 데이터 가져와서 가공하는게 맞나? 모델만들어서 하는건가? 유틸?
// 어차피 1일부터 마지막 일까지 순서대로 그리니까 (거꾸로 그려야하나?) 그때 state로 합 계산해도 좋을듯
