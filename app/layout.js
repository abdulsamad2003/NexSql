import "./globals.css";
import BottomTopArrow from './components/BottomTopArrow'

export const metadata = {
  title: "VORN AI",
  description: "VORN AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <BottomTopArrow/>
      </body>
    </html>
  );
}
