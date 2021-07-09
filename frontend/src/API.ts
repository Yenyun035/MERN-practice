import axios, { AxiosResponse } from 'axios'

const getTodos = async (): Promise<AxiosResponse<Array<ITodo>>> => {
// TODO: Should call GET endpoint
    try {
        const todos = await axios.get('/api/todos')
        return todos
    } catch(error) {
        console.error(`GET /api/todos/${error}`)
        throw new Error(error)
    }
}

// TODO: Should call POST endpoint
const addTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    try {
        const newTodo = {
            ...todoBody,
            status: false
        }
        const todo = await axios.post('/api/todos', newTodo)
        return todo
    } catch(error) {
        console.error(`POST /api/todos/${error}`)
        throw new Error(error)
    } 
}

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
// TODO: Should call PUT endpoint
    try {
        const todo = await axios.put(`api/todos/${todoBody._id}`, todoBody)
        return todo
    } catch(error) {
        console.error(`PUT /api/todos/${todoBody._id} Error: ${error}`)
        throw new Error(error)
    }
}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {
// TODO: Should call DELETE endpoint
    try {
        const result = await axios.delete(`/api/todos/${id}`)
        return result
    } catch(error) {
        console.error(`DELETE /api/todos/${id} Error: ${error}`)
        throw new Error(error)
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo }
