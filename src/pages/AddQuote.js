import React from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
export default function AddQuote() {
  const history = useHistory();
  const addQuoteHandler = (e) => {
    console.log("hello");
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
