import { BtnPrimary } from "@/components/BtnPrimary";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Componentes
        </h1>
        <div className="flex gap-3">
          <BtnPrimary variant="dashboard" icon text="Dashboard" />
          <BtnPrimary variant="search" icon text="Search" />
          <BtnPrimary variant="add" icon text="Add" />
        </div>
      </main>
    </div>
  );
}
