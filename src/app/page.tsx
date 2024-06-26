"use client"

import { useQuery } from "react-query";


const useTodo = (id: number) =>{
 const {isLoading, isError, data} = useQuery(['TODOS',id], ()=>{
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
  })
  return {isLoading, isError, todo: data}
}

export default function Home() {
  
  const {isLoading,todo} = useTodo(1);

  if(isLoading) return <h1>Loading...</h1>

  console.log(todo);
  
  return (
    <div>
      <h1>Hello world</h1>
      <h2>Task: #{todo.id}</h2>
      <h2>Title: {todo.title}</h2>
      <h2>User: {todo.userId}</h2>
      <h2>Is completed? : {todo.completed}</h2> 
    </div>
  );
}
