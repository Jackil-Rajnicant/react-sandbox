import React from 'react'
import useFetch from '../hooks/useFetch'

export default function CustomHookExample1() {

    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    if(loading) {
        return <h3>Loading...</h3>
    }
  return (
    <div>
      {data.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}
