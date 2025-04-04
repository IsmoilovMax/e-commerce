"use server"

export const createPost = async (formData: FormData) => {
  const title = formData.get('title')
  const content = formData.get('content')

  const res = await fetch('https://api.vercel.app/posts', {
    method: "POST",
    body: JSON.stringify({ title, content }),
  })

  const json = await res.json()

  if (!res.ok) {
    return { messsage: "Failed to create post" }
  }
}
// export async function createPosts(formData: FormData){}

export const deletePost = async (formData: FormData) => { }
// export async function deletePosts(formData: FormData){}
