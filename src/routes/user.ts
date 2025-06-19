import generateFakePerson from '@carlgo11/fake-person'
import app from '../app.js'
import { jsonRes } from '../helpers/res.js'

const userRoute = app.get('/me', async (c) => {
	const user = await generateFakePerson({
		country: 'Norway',
	})
	return c.json(
		jsonRes({
			data: user,
		})
	)
})

export default userRoute
