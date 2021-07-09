import React from 'react'
import { render, screen } from '@testing-library/react'
import AddTodo from '../components/AddTodo'

// TODO: Add some simple test cases, e.g. checking components are rendered successfully
test('should show the field name and button', () => {
    render(<AddTodo saveTodo={() => {}}/>)
    const nameText = screen.getByText("Name")
    expect(nameText).toBeInTheDocument()
    const nameInput = screen.getByLabelText("Name")
    expect(nameInput).toHaveAttribute("required")

    const decText = screen.getByText("Description")
    expect(decText).toBeInTheDocument()
    const decInput = screen.getByLabelText("Description")
    expect(decInput).toHaveAttribute("required")

    const addButton = screen.getByText("Add Todo")
    expect(addButton).toHaveAttribute("disabled")
})