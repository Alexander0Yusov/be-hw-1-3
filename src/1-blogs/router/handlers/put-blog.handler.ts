import { Request, Response } from 'express';
import { blogsRepository } from '../../repository/blogs.repository';
import { HttpStatus } from '../../../core/types/HttpStatus';

export async function putBlogHandler(req: Request, res: Response) {
  try {
    await blogsRepository.update(req.params.id, req.body);

    res.sendStatus(HttpStatus.NoContent);
  } catch (error: unknown) {
    res.sendStatus(HttpStatus.InternalServerError);
  }
}
