import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
export default function AddQuote() {
  const addQuoteHandler = (e) => {
    console.log("hello");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
