import React from 'react'

function TodoList(props) {
	return (
		<li>{props.text}<button className="close" onClick={()=>{
			props.onSelect(props.id)
		}}>x</button></li>
	)
}

export default TodoList