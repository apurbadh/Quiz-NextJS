import styles from '../styles/Home.module.scss'

interface answerPattern{
    answer:string;
    isCorrect:boolean;
}

interface questionPattern {
    question: string,
    option: answerPattern[],
    onNext: (isCorrect: boolean)=> void;
}

export default function Question(props : questionPattern){
    return <div>
        <h2 className={styles.title}>{props.question}</h2>
        <br/>
        <div className={styles.the_button}>
            {props.option.map((answer: answerPattern, index) => <button className={styles.option} onClick={()=> props.onNext(answer.isCorrect)} key={index}>{answer.answer}</button>)}
        </div>
    </div>

}
