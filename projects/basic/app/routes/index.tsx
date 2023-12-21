import { createRoute } from 'sonik/factory'
import { getCookie, setCookie } from 'hono/cookie'

export const POST = createRoute(async (c) => {
  const { title } = await c.req.parseBody<{ title: string }>()
  setCookie(c, 'title', title)
  return c.redirect('/')
})

export default createRoute((c) => {
  const title = getCookie(c, 'title') ?? 'no title'
  return c.render(
    <div>
      <h1>Hello, {title}!</h1>
      <form method="post">
        <input type="text" name="title" placeholder="Title" />
        <input type="submit" />
      </form>
    </div>
  )
})
