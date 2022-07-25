import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm onAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} onDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
