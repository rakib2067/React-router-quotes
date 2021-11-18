import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATA = [
  { quoteId: "q1", author: "Racks", text: "First quote" },
  { quoteId: "q2", author: "Rocks", text: "Second quote" },
  { quoteId: "q3", author: "Ricks", text: "Last quote" },
];
export default function AllQuotes() {
  //onclick path quotes/:quoteId
  return <QuoteList quotes={DUMMY_DATA} />;
}
