import { Request, Response } from 'express';
import { blogsRepository } from '../../repository/blogs.repository';
import { HttpStatus } from '../../../core/types/HttpStatus';

export async function deleteBlogHandler(req: Request, res: Response) {
  try {
    await blogsRepository.delete(req.params.id);

    res.sendStatus(HttpStatus.NoContent);
  } catch (error: unknown) {
    res.sendStatus(HttpStatus.InternalServerError);
  }
}
