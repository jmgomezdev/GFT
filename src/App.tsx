import Loading from "./components/loading/Loading";
import Content from "./layouts/Content";
import Header from "./layouts/Header";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
