import { hc } from 'hono/client'
import type { AppType } from './index.cjs'

// client.ts
const client = hc<AppType>('http://localhost:3000/')

const resAll = await client.posts.all.$get()

const dataAll = await resAll.json()

console.log('🚀 data :- ', dataAll.data.nextPageAvailable)

const resPost = await client.posts['id:slug'].$get({
	query: {
		slug: dataAll.data.posts[0].slug,
	},
})

const dataPost = await resPost.json()
if (!dataPost.success) {
	console.log('🚀 error :- ', dataPost.error)
} else {
	console.log('🚀 data :- ', dataPost.data.title)
}
