import React from 'react';
import {useParams , Navigate} from "react-router-dom";
/
import { useSelector} from "react-redux";

function QuoteDetail() {
  const {quotes_id} = useParams(); 
  console.log("quote_id" , quotes_id);
  
   
  
  const quote = useSelector(state => state.quotes.items.find((item) => item.quote_id ===  Number(quotes_id)));

  if(!quote){
   
    return <Navigate to="/quotes" />
  }

   return (
    <div>
      <h1>Quote Detail</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  )
}

export default QuoteDetail;