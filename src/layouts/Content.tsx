import Loading from "@/components/loading/Loading";
import Router from "@/Router";
import { Suspense } from "react";

export default function Content() {
  return (
    <main className="container pb-8 pt-6 font-sans antialiased md:py-10">
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </main>
  );
}
