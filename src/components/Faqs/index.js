import React from 'react'
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = ({faqsList}) => {
  return (
    <div className="faqs-app-container">
      <div className="faqs-container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(faq => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
