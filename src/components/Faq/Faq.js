import { useState } from "react"
import classes from "./Faq.module.css"

const questions = [
    {
        question: "How can I participate in Tharang 23 V2?",
        answer: "Participation in Tharang 2023 V2 is open to everyone and there are no registration fees to be applied."
    },
    {
        question: "What are the dates of THARANG 23 V2?",
        answer: "November 10 and November 11. Events will happen from 9:00 am to 9:00 pm"
    },
    {
        question: "What is the entry fees for THARANG 23 V2?",
        answer: "Its totally free of cost but for specefic events it's not"
    },
    {
        question: "Is it possible for one participant to attend any workshop?",
        answer: "No, participants can only attend registered workshops due to the scheduling of time."
    },    
]

const Faq = () => {

    const [clicked, setClicked] = useState(null)

    const toggle = (i) => {
        if(clicked === i) {
            return setClicked(null)
        }

        setClicked(i)
    }

  return (
    <section className={classes.faqSection}>
    <div className={classes.heading}>
        FAQ
    </div>
        <div className={classes.faq}>

        {questions.map((ques, i) => {
           return <div className={classes.single} onClick={() => toggle(i)}>
                <div className={classes.question}>{ques.question}</div>
                <div className={`${clicked === i ? classes.answer : classes.noAnswer}`}>{ques.answer}</div>
            </div>
        })}

            
        </div>
    </section>
  )
}

export default Faq