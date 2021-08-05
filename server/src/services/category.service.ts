import { getDefaultCategories } from '../migrations/category.migration';

export const getDefaultCategoriesService = async () => {
	const defaultCategories = await getDefaultCategories();
	return defaultCategories;
};
