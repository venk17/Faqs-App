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
      <div className="faq-question" onClick={toggleFaq}>
        <h2 className="question-text">{questionText}</h2>
        <img
          src={
            isOpen
              ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
          }
          alt={isOpen ? 'minus' : 'plus'}
          className="icon"
        />
      </div>
      {isOpen && <p className="faq-answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem
