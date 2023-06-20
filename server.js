// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const fastifySession = require('@fastify/session')
const fastifyCookie = require('@fastify/cookie')


fastify.register(fastifyCookie)
fastify.register(fastifySession,
  {
    secret: 'a secret with minimum length of 32 characters',
    cookie: {
      secure: false
    },
    expires: 1800000
  }
)

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.post('/login', function handler (request, reply) {
  const user = {
    id: 'peanut1234',
    pass: '567890',
    name: 'peanut'
  }
  
  const { id, pass } = request.body

  if (user.id && user.pass === pass) {
    // You can access to sessionId. `@fastify/session` always create sessionId by default.
    console.log(request.session.sessionId)
  } else {
    resizeBy.status.redirect('/')
  }

  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
