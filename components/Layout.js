import { ToastContainer } from "react-toastify";

export function Layout({children}) {
  return (
    <>
    <h1>Navbar</h1>
    <div className="bg-gray-100 h-screen p-10">
        <div className="container mx-auto h-full">
            { children }
        </div>
    </div>
    <ToastContainer/>
    </>
  );
}

