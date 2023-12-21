import { createApp } from 'sonik/server'
import { showRoutes } from 'hono/dev'

const app = createApp()

showRoutes(app)

export default app
