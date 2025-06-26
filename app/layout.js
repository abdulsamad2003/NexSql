import "./globals.css";
import BottomTopArrow from './components/BottomTopArrow'
// Removed: import {Web3Provider} from '../app/hooks/WebProvider'
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "VORN AI",
  description: "VORN AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster  autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
        {/* Removed Web3Provider wrapper */}
        {children}
        <BottomTopArrow/>
      </body>
    </html>
  );
}
