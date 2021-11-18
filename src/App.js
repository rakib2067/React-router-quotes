import { Redirect, Route, Switch } from "react-router";
import MainNav from "./components/layout/MainNav";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <AddQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
