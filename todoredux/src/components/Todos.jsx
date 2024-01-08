import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo,updateTodo,isEditAble,toggleComplete} from '../features/todo/todoSlice'

function Todos() {
  const dispatch = useDispatch();
  const Todos = useSelector(state => state.todos)
  

  const  handleUpdate = (e,id)=>{

   
    dispatch(updateTodo({ id, newText : e.target.value}))
  }


  return (
    <>
    <div className="flex justify-center ">
      <div className="text-2xl text-zinc-200 w-1/3 rounded-3xl bg-slate-600 p-2 m-2 text-center">
        Todos
      </div>
    </div>
    <ul className="list-none flex-wrap flex justify-center w-screen">




      {Todos.map((todo) => (
        <li
          className="mt-4 flex w-2/3 h-10 justify-between items-center rounded-xl bg-zinc-800 px-4 py-2"
          key={todo.id}
        >
          
          <input
      type="checkbox"
      
      className="w-5 h-5 m-2 cursor-pointer" 
      checked={todo.compeleted}
      onChange={()=>dispatch(toggleComplete(todo.id))} // re-rendering not happen i guess
    />       
    <input    
              type="text"
              className={`border text-zinc-50 outline-none w-full bg-transparent rounded-lg ${
                  todo.editAble ? "border-white/10 px-2" : "border-transparent"
              } ${todo.compeleted ? "line-through" : ""}`}
              value={todo.text}
              onChange={(e) => {if(!todo.compeleted)handleUpdate(e,todo.id)} }
            
              readOnly={!todo.editAble}
              
             
          />
          <button
              className="inline-flex m-3 w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={
                () => {
             
                  if (todo.compeleted) return;
console.log(todo.editAble)
                  if (todo.editAble) {
                    dispatch(isEditAble({ id : todo.id }))
                  } else dispatch(isEditAble({ id :todo.id }));
                  console.log("next"+ todo.editAble)
              }}
            
              disabled={todo.compeleted}
          >
              {todo.editAble ? "📁" : "✏️"}
          </button>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          >
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos