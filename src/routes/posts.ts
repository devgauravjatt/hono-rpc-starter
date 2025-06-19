import { zValidator } from '@hono/zod-validator'
import { getPosts, getFullPostBySlug } from 'best-blog-data'
import z from 'zod'
import app from '../app.js'
import { jsonRes } from '../helpers/res.js'

const posts_route = app
	.get('/all', (c) => {
		const posts = getPosts()
		return c.json(
			jsonRes({
				data: posts,
			})
		)
	})
	.get(
		'/id:slug',
		zValidator(
			'query',
			z.object({
				slug: z.string(),
			})
		),
		(c) => {
			const slug = c.req.valid('query').slug
			const post = getFullPostBySlug(slug)
			if (post) {
				return c.json(
					jsonRes({
						data: post,
					})
				)
			}
			return c.json(jsonRes({ error: 'Post not found' }), 404)
		}
	)

export default posts_route
