import { Header } from "./components/Header";
import { AllPlans } from "./components/AllPlans";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">
        <AllPlans />
      </main>
    </div>
  );
}
