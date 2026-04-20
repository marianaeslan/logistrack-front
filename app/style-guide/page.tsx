import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";
import { NavbarNavigation } from "@/components/molecules/NavbarNavigation";
import { Navbar } from "@/components/organisms/Navbar";

export default function ComponentsPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <header className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold">Componentes</h1>
          <p className="text-grey">
            Visualização organizada dos componentes por categoria.
          </p>
        </header>

        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Molecules</h2>

            <div className="rounded-lg border border-grey/30 bg-white p-6 dark:bg-black">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">NavbarNavigation</h3>
                <span className="text-sm text-grey">
                  Componente de navegação
                </span>
              </div>
              <div className="w-full overflow-hidden rounded-md">
                <NavbarNavigation />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Atoms</h2>

            <div className="rounded-lg border border-grey/30 bg-white p-6 dark:bg-black">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">Button</h3>
                <span className="text-sm text-grey">
                  Variações de tamanho e ícone
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="dashboard"
                  icon
                  text="Dashboard"
                  size="small"
                />
                <Button variant="search" icon text="Search" size="medium" />
                <Button variant="add" icon text="Add" size="large" />
              </div>
            </div>
            <div className="rounded-lg border border-grey/30 bg-white p-6 dark:bg-black">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">Logotipo</h3>
                <span className="text-sm text-grey">Variações de cores</span>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Logo />
                <div className="bg-white px-3 py-3 rounded-md">
                  <Logo color="dark" />
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Organisms</h2>
            <div className="rounded-lg border border-grey/30 bg-white p-6 text-grey dark:bg-black">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">Navbar</h3>
                <span className="text-sm text-grey">
                  Componente navbar e variações
                </span>
              </div>
              <div className="w-full overflow-hidden rounded-md">
                <Navbar bgColor="dark" textColor="light" />
                <Navbar bgColor="light" textColor="dark" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
