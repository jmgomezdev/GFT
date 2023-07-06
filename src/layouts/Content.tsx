import Router from "@/Router";
import Loading from "@/components/loading/Loading";
import { Suspense } from "react";

export default function Content() {
  return (
    <main className="flex-1 bg-background font-sans antialiased">
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </main>
  );
}
