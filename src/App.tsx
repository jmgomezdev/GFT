import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/loading/Loading";
import Content from "./layouts/Content";
import Header from "./layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
