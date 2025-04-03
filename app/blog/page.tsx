'use client'

import React from 'react'
import axios from 'axios'




const Page = async () => {
  // const fetcher = (url:any) => fetch(url).then((s) => s.json)

  
  // const url = 'https://api.vercel.app/blog'
  // const fetchers = fetcher(url)
  // console.log("fetcher:", fetchers)
  // const dataAll = data
  // const dataOne = dataAll[1].date
  // console.log("dataAll:", dataAll)
  // console.log("dataOne:", dataOne)




  // console.log("axiosData:", dates)
  // console.log("fetchData:", posts.slice(10))
  const { data } = await axios.get('https://api.vercel.app/blog')

  return (
    <>
        <ul>
          {data.map((post: any) =>(
            <li key={post._id}>
              {post.title}
            </li>
          ))}
        </ul>
    </>
  )
}

export default Page
