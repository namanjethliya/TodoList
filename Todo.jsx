import React from 'react'
import { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

function Todo() {
	const [todo, setTodo] = useState('')
	const [task, setTask] = useState([])
	const [edit, setEdit] = useState(false)


	function handleChange(e) {
		setTodo(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (edit !== false) {
			task.find((t) => { return t.key === edit }).value = todo;
			setTask(task)
		}

		else {
			let obj = {
				key: Date.now(),
				value: todo
			}

			setTask([...task, obj])
		}
		setTodo('')

	}
	// CancelIcon
	function HandleCross(k) {
		// console.log("cross selected")
		return (
			setTask(task.filter((t) => {
				if (t.key !== k)
					return t
			})
			)
		)
	}
	//editList
	function editTask(e) {
		setTodo(task.find((t) => { return (t.key === e) }).value)
		setEdit(e)

	}

	// PrintList
	function PrintList() {
		return (
			<ul>
				{
					task.map((t) => {
						return <li key={t.key} className='li'><span onClick={() => { editTask(t.key) }}>{t.value}</span> <CancelIcon className='cross' onClick={() => { HandleCross(t.key) }} /> </li>
					})
				}
			</ul>
		)
	}



	return (
		<div className="todoList">
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Enter a Task' value={todo} onChange={handleChange} />
				<input type='submit' value='Add Task' />
			</form>
			<PrintList />
		</div>
	)
}

export default Todo