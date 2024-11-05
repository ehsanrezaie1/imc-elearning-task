import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { PageProvider } from "context";
export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <PageProvider>
        <Header />
        <main className="pt-6 mx-auto max-w-7xl rounded px-4 pb-8 bg-gray-200">
          <Outlet />
        </main>
      </PageProvider>
    </div>
  );
};
