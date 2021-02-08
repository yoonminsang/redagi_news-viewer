import React, { useCallback, useState } from "react";
import NewsPage from "./pages/NewsPage";
import { Route } from "react-router-dom";

const App = () => {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);
  return <Route path="/:category?" component={NewsPage} />;
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );
};

export default App;
