import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"

const FeedbackList = ({ feedback, onDelete}) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem 
        key={item.id}
        item={item}
        onDelete={onDelete}
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

export default FeedbackList
