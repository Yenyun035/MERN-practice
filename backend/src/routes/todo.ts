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

    server.addTodo('/todos', opts, async(request, reply) => {
        const todoBody: ITodo = request.body as ITodo
        const todo: ITodo = await todoRepo.addTodo(todoBody)
        return reply.status(201).send({todo})
    })

    done()
}

export { TodoRouter }
