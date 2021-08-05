import {
	getDefaultCategories,
	createCategory,
} from '../migrations/category.migration';

export const getDefaultCategoriesService = async () => {
	const defaultCategories = await getDefaultCategories();
	return defaultCategories;
};

export const createCategoryService = async (name: string, color: string) => {
	const category = await createCategory(name, color);
	return category;
};
