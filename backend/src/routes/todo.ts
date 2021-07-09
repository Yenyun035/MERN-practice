import { FastifyInstance, RouteShorthandOptions, FastifyReply } from 'fastify'
import { ITodo } from '../types/todo'
import { TodoRepoImpl } from './../repo/todo-repo'

const TodoRouter = (server: FastifyInstance, opts: RouteShorthandOptions, done: (error?: Error) => void) => {

    const todoRepo = TodoRepoImpl.of()

    interface IdParam {
        id: string
    }

    // TODO: Add CRUD endpoints, i.e. get, post, update, delete
    // NOTE: the url should be RESTful

    server.post('/todos', opts, async(request, reply) => {
        try {
            const todoBody: ITodo = request.body as ITodo
            const todo: ITodo = await todoRepo.addTodo(todoBody)
            return reply.status(201).send({todo})
        } catch(error) {
            return reply.status(500).send('Server error...')
        }
    })

    server.put<{Params: IdParam}>('/todos', opts, async(request, reply) => {
        try {
            const id = request.params.id;
            const todoBody: ITodo = request.body as ITodo
            /**
             * todoBody {
             *  name: 'clean my desk',
             *  description: 'hhh',
             *  status: true
             * }
             */
            
            const todo: ITodo | null = await todoRepo.updateTodo(id,todoBody)
            return reply.status(200).send({todo})
        } catch(error) {
            return reply.status(500).send('Server error...')
        }
    })

    done()
}

export { TodoRouter }
