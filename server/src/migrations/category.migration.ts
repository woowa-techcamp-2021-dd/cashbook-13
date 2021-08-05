import Category from '../models/category.model';
import { Op } from 'sequelize';

export const createCategory = (name: string, color: string) =>
	new Promise((resolve, reject) => {
		Category.create({
			name,
			color,
		});
	});

export const getDefaultCategories = async () =>
	await Category.findAll({
		where: {
			id: { [Op.between]: [1, 10] },
		},
	});
