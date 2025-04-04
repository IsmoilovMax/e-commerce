import React, { Suspense } from 'react'
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
  // const { data } = await axios.get('https://api.vercel.app/blog')
  const fetchData = await fetch(`https://api.vercel.app/blog`)
  const post = await fetchData.json()

  return (
    <>
       <Suspense fallback={<div>Loading...</div>}>
       <ul>
          {post.map((post: any) =>(
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
       </Suspense>
    </>
  )
}

export default Page
