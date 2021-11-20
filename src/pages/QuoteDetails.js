import React from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { quoteId: "q1", author: "Racks", text: "First quote" },
  { quoteId: "q2", author: "Rocks", text: "Second quote" },
  { quoteId: "q3", author: "Ricks", text: "Last quote" },
];
export default function QuoteDetails() {
  const match = useRouteMatch();
  const params = useParams();
  const quotes = DUMMY_DATA.find((item) => item.quoteId === params.quoteId);
  if (!quotes) {
    return <p>No Quote found</p>;
  }
  return (
    <div>
      <h1>Quote details</h1>
      <HighlightedQuote text={quotes.text} author={quotes.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}
