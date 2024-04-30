import React
    , {
    FC,
} from 'react';
import styles from "./Quote.module.css"

export interface IQuote{
    "id": number,
    "quote": string,
    "author": string
}
const Quote:FC<IQuote> = ({quote, id, author}) => {

    return (
        <div className={styles.quoteBox} key={id}>
            <h4 key={id}>{id}</h4>
            <h2 key={id+1}>"{quote}"</h2>
            <h3 key={id+2} className={styles.authorName}>~{author}</h3>
        </div>
    );
};

export default Quote;