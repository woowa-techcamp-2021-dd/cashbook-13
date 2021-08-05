import UserCategory from '../models/user-category.model';

export const createUserCategory = async (
	user_id: number,
	category_id: number
) => await UserCategory.create({ user_id, category_id });
