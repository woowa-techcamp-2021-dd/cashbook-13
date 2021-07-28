import Category from '../models/category.model';

const createCategory = (name: string) =>
	new Promise((resolve, reject) => {
		Category.create({
			name,
		});
	});
