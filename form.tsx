import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export function Form() {
  return (
    <form action={createPost}>
      <input type='text' name='title' />
      <input type='email' name='content' />
      <label htmlFor="content">Content</label>
      <button type='submit'>Create</button>
    </form>
  )
}


export async function createPost(formData: FormData) {
  'use server'
  revalidatePath('/posts')
  redirect('/posts')
}