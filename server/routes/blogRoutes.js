import express from 'express'
import upload from '../middleware/multer.js'
import auth from '../middleware/auth.js'
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/BlogController.js';

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image'), auth, addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/generate', auth, generateContent);
blogRouter.get('/comments/:blogId', getBlogComments);
blogRouter.get('/:id', getBlogById); 

export default blogRouter;