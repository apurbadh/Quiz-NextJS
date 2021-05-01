import styles from '../styles/Home.module.scss'


interface propsType {
    marks: number,
    full : number
}
export default function Result(props: propsType){

    return<div>
        <h2 className={styles.title}>Results</h2>

        <div className={styles.description}>
            You got {props.marks} out of {props.full} !
        </div>
    </div>

}
