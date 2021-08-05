import { createUserCategory } from '../migrations/user-category.migration';

export const createUserCategoryService = async (
	user_id: number,
	category_id: number
) => {
	const userCategory = await createUserCategory(user_id, category_id);
	return userCategory;
};
