import Category from '../models/category.model';

const createCategory = (name: string, color: string) =>
	new Promise((resolve, reject) => {
		Category.create({
			name,
			color,
		});
	});
