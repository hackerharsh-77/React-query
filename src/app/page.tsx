"use client"

import { useQuery } from "react-query";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Children } from "react";


// const usePost = (id: number) =>{
//  const {isLoading, isError, data, error} = useQuery(['POSTS',id], ()=>{
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(response => {
//         if(!response.ok){
//           throw new Error('Post not found !')
//         }
//         return response.json();
//       })
//   }, {
//     retry: false,
//     refetchOnWindowFocus: false
//   })
// const {isLoading, isError, data, error} = useQuery(['POSTS',id], ()=>{
//   return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.data)
// }, {
//   retry: false,
//   refetchOnWindowFocus: false
// })

//   return {isLoading, isError, post: data, error: error as Error}
// }

export default function Home() {
  
  // const {isLoading,isError,post, error} = usePost(101);

  // if(isLoading) return <h1>Loading...</h1>
  // if(isError) return <h1>Error: {error.message}</h1>

  // console.log(post);
  
  
  return (
    // <div>
    //   <h1>Hello world</h1>
    //   <h2>Task: #{post.id}</h2>
    //   <h2>Title: {post.title}</h2>
    //   <h2>Description: {post.body}</h2>
    // </div>
    <div>
      Hello
    </div>
  );
}
