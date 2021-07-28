import UserCategory from '../models/user-category.model';

const createUserCategory = (user_id: number, category_id: number) =>
	new Promise((resolve, reject) => {
		UserCategory.create({ user_id, category_id });
	});
