import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	clean: true,
	outDir: 'client',
	dts: {
		only: true,
	},
})
