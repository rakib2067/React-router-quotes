import React from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
export default function QuoteDetails() {
  const params = useParams();
  return (
    <div>
      <h1>Quote details</h1>
      <p>{params.quoteId}</p>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}
