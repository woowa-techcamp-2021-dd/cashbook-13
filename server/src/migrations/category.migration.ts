import Category from '../models/category.model';
import { Op } from 'sequelize';

export const createCategory = async (name: string, color: string) =>
	await Category.create({
		name,
		color,
	});

export const getDefaultCategories = async () =>
	await Category.findAll({
		where: {
			id: { [Op.between]: [1, 10] },
		},
	});
