import React, {useState} from 'react'
import './index.css'

const FaqItem = ({faq}) => {
  const {questionText, answerText} = faq
  const [isOpen, setIsOpen] = useState(false)

  const toggleFaq = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={toggleFaq}>
          <img
            src={
              isOpen
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isOpen ? 'minus' : 'plus'}
            className="icon"
          />
        </button>
      </div>
      {isOpen && (
        <div className="answer-container">
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
