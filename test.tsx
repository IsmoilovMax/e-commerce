'use client'

import { FC, useActionState, useState } from "react"
import { createPost } from "./lib/actions"


export function Button() {
  return <button formAction={""}>Create</button>
}


interface LikeButtonProps {
  initialLikes: number
}

const incrementLikes = async () => {
  return 1
}


export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)

  const submitLike = async () => {
    const updateLikes = await incrementLikes()
    setLikes(updateLikes)
  }
  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={submitLike}
      >
        Like
      </button>
    </>
  )
}

export const button = () => {
  const [state, action, pending] = useActionState(createPost as any, false)
  
  const handleClick = async () => action()
  

  return (
    <button onClick={handleClick}>
      {pending ? "LoadingSpinner" : "Create Post"}
    </button>
  )
}