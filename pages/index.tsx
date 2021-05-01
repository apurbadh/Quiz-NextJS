import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Question from "../components/Question"
import Result from "../components/Result";
import {useState} from "react";

interface answerPattern{
    answer:string;
    isCorrect:boolean;
}

export default function Home() {
    const [isFinished, finished] = useState(false);
    const [marks, updateMarks] = useState(0);
    const [currentQuestion, nextQuestion] = useState(0);
    const [doAnimate, animate] = useState(0)

    const questions: [string, answerPattern[]][] = [
        ["Who is the president of US ?", [{answer:"Donald Trump", isCorrect:false}, {answer:"Joe Biden", isCorrect:false}, {answer:"Kanye West", isCorrect:true}, {answer:"Kim Jong Un", isCorrect:false}]],
        ["What is the full form of HTML ?",  [{answer:"Hypertext Markup Language", isCorrect:false}, {answer:"Hi Tim My Love", isCorrect:true}, {answer:"Hyper Thread Modern Language", isCorrect:false}, {answer:"No Full Form", isCorrect:false}]],
        ["Which is the most loved programming language ?", [{answer:"Typescript", isCorrect:false}, {answer:"Java", isCorrect:true}, {answer:"Rust", isCorrect:false}, {answer:"Python", isCorrect:false}]],
        ["Which is the most popular Javascript framework right now ?", [{answer:"React JS", isCorrect:false}, {answer:"Vue JS", isCorrect:true}, {answer:"Express", isCorrect:false}, {answer:"Angular", isCorrect:false}]],
        ["Which deep learning algorithm is used to analyse photos and videos ?", [{answer:"CNN", isCorrect:true}, {answer:"RNN", isCorrect:false}, {answer:"GANS", isCorrect:false}, {answer:"kNN", isCorrect:false}]],
    ]
    const nextQuestionFunction = async (isCorrect: boolean) => {
        animate(1);
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (isCorrect) {
            let newMarks = marks + 1;
            updateMarks(newMarks)

        }
        if (currentQuestion < questions.length -1) {

            let nextQuestionN = currentQuestion + 1;
            nextQuestion(nextQuestionN);
        }else{
            finished(true)
        }
        animate(2)
        await new Promise(resolve => setTimeout(resolve, 1000));
        animate(0)


    }

  return (

    <div className={styles.container} ani={doAnimate}>
      <Head>
        <title>Quiz</title>
      </Head>
      <div className={styles.card}>
          {isFinished ?
              <Result marks={marks} full={questions.length}/>:
              <Question question={questions[currentQuestion][0]} option={questions[currentQuestion][1]}
                        onNext={nextQuestionFunction}/>
          }
        <br/>
      </div>
    </div>
  )
}
