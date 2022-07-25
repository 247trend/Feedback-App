import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelector from "./RatingSelector"

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  const onSend = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback={
        text,
        rating,
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      
      setText("") 
    }
  }

  useEffect(()=> {
    if (feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    const inputText = e.target.value
    if (inputText === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (inputText.trim().length < 10) {
      setBtnDisabled(true)
      setMessage("Review must be at least 10 characters")
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(inputText)
  }

  return (
    <Card>
      <form onSubmit={onSend}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelector select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text} placeholder="Write a review" />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
