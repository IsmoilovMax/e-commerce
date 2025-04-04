import { useState } from "react"
import { toast } from "sonner"

interface onError {
  message: string,

}

const useActions = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onError = (messages: onError) => {
    const { message } = messages

    setIsLoading(false)
    toast("error", {
      description: message,
    })
    return { isLoading, setIsLoading, onError }
  }
}

export default useActions