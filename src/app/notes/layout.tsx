import NavBarPage from "./NavBar";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarPage />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
}
