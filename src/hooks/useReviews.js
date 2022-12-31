import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export const useReviews = () => {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      setIsPending(true)
      try {
        const response = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1",
          { signal: controller.signal }
        )
        console.log(response)
        const data = await response.data.data
        function getTwoRandomElements(arr) {
          if (arr.length < 2) {
            throw new Error("Array must have at least 2 elements")
          }
          const randomIndex1 = Math.floor(Math.random() * arr.length)
          let randomIndex2 = Math.floor(Math.random() * arr.length)
          while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * arr.length)
          }
          return [arr[randomIndex1], arr[randomIndex2]]
        }
        setReviews(getTwoRandomElements(data))
        setIsPending(false)
        setError(null)
      } catch (error) {
        setIsPending(false)
        setError(error.message)
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }
  }, [])

  return { reviews, error, isPending }
}
