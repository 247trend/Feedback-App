import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

const FeedbackForm = () => {
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  const onAdd = (e) => {
    e.preventDefault()
  }

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
      <form onSubmit={onAdd}>
        <h2>How would you rate your service with us?</h2>
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
