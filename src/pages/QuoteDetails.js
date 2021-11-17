import React from "react";
import { useParams } from "react-router";

export default function QuoteDetails() {
  const params = useParams();
  return (
    <div>
      <h1>Quote details</h1>
      <p>{params.quoteId}</p>
    </div>
  );
}
