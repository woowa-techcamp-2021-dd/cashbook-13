import { Request, Response } from 'express';
import { createUserCategoryService } from '../services/user-category.service';

export const createUserCategoryController = async (
	req: Request,
	res: Response
) => {
	const { user_id, category_id } = req.body;
	const userCategory = await createUserCategoryService(user_id, category_id);
	res.status(200).json({ userCategory });
};
