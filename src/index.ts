import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return Response.redirect("https://nikiv.dev", 301);
})
app.get('/thanks', (c) => {
  return Response.redirect(`https://img.shields.io/badge/-say%20thanks-0a0a0a.svg?style=flat&colorA=0a0a0a&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJUSURBVGhD7ZcxSxxRFIXHINokSAohNrFJESRJrRaKwbDuzmqRsD9De2221FY0oK1iIKRL/oKKBJIuZAX9CUmTNpmXc5d7Qebd3dkZZ3fuwHxwGJ337plzdtZhDCoqKioqSkO0sfHINZvPo/X1Z67VesinM0MeXS/yhDefzh+3vDweNZvvojD8gONvXNCJ8HuE8x0cDxBmnkcSwf4FzB3ieE0eMc9fWDuLGo23rt1+wCP3A2YhTH/cvVA/IcQFZhZ53IPW4HepzWqia0M1Hk8PfRIw2osbDyJc+B905FZXp9gucGH4GCWPaU2b6Se6Y5jbTX13XBCMYfhUM00jeNxE9fpLfOVe4edbbU8aocwJZeOYyWBgRzPKInj9IWlrWQSvbY7ZH2x8Af3VTCyIsuHJNsdxe4ONXzQDS0LGzxxXB0+UWW3QmuiPH8enHNsHG7biQ1aFD32TY/ugyCdtyKLw9frIsX1Q5EIbsijKyrF90LKjDVkUZeXYPlgc+NWhaCHrOcf2weK+NmRRlJVj++BV4rU2ZFF4ai1xbJ/uO1YYftcGLQkZv3Hk3uCuvNGGLQl3Y4Xj9geN32sGFoTH7gHHTCZaW5tEma+aUZFCiSv8WzzBMQcDZaZR5qdmWIQoC2XieOlwjcYTC2W6JWq1GY6VjaLL5FJCKKpMriWEUZcZSglhVGWGWkIYdpmRlBCGVWakJYS8yxRSQqAL51Gm0BLCfcuYKCFkLWOqhJC2jMkSwqBlTJcQksqUooTQq0ypSgjxMqUsIUiZUpcQumXKXqKiovQEwX/CvVQFlljt2QAAAABJRU5ErkJggg==`, 301);
})

export default app
