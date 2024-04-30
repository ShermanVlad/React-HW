import React
    , {
    FC,
    useEffect,
    useState
} from 'react';
import quote, {
    IQuote
} from "./Quote";
import Quote
    from "./Quote";

const Quotes:FC = () => {
    const [quotes,setQuotes] =useState<IQuote[]>()

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(quotes => quotes.json())
            .then(({quotes})=> setQuotes(quotes));
    }, []);

    return (
    <div>
        {
            quotes?.map((quote, index)=>
                <div key={index}> <Quote id={quote.id} quote={quote.quote} author={quote.author} />
            </div>)
        }
    </div>
    );
};

export default Quotes;