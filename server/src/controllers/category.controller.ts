import { Request, Response } from 'express';
import { getDefaultCategoriesService } from '../services/category.service';

export const getDefaultCategoriesController = async (
	req: Request,
	res: Response
) => {
	const categories = await getDefaultCategoriesService();
	res.status(200).json({ categories });
};
