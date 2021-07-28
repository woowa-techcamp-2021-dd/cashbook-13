import { getRecord } from '../migrations/record.migration';

const recordService = async (userID: number) => {
	const record = await getRecord(userID);
	console.log('controller : ', record);
	return record;
};

export default recordService;
