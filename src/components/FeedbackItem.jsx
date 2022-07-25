import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext)
  const { editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => deleteFeedback(item.id)} color="purple" />
      </button>
      <button className="edit">
        <FaEdit onClick={() => editFeedback(item)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
