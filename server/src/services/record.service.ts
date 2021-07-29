import { getRecord } from '../migrations/record.migration';

const recordService = async (userID: number) => {
	const record = await getRecord(userID);
	return record;
};

export default recordService;
