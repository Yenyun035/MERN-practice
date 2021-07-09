import React from 'react'
import { render, screen } from '@testing-library/react'
import TodoItem from '../components/TodoItem'
import { createExportDeclaration } from 'typescript'

// TODO: Add some simple test cases, e.g. checking components are rendered successfully
test('should show the actions of todo', () => {
    const mockTodo: ITodo = {
        _id: '',
        name: '',
        description: '',
        status: false
    }

    render(<TodoItem
        updateTodo = {() => { }}
        deleteTodo = {() => { }}
        todo = {mockTodo}
    />)
    const cpltText = screen.getByText("Complete")
    expect(cpltText).toBeInTheDocument()

    const dltText = screen.getByText("Delete")
    expect(dltText).toBeInTheDocument()
})