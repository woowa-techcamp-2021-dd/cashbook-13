import { Request, Response } from 'express';
import {
	getDefaultCategoriesService,
	createCategoryService,
} from '../services/category.service';

export const getDefaultCategoriesController = async (
	req: Request,
	res: Response
) => {
	const categories = await getDefaultCategoriesService();
	res.status(200).json({ categories });
};

export const createCategoryController = async (req: Request, res: Response) => {
	const { name, color } = req.body;
	const category = await createCategoryService(name, color);
	res.status(200).json({ category });
};

