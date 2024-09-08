import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HRnet',
  description:
    "Welcome to HRnet! This is our company's internal application to create and view employee records.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="shadow-md w-full flex flex-col gap-4 p-8 justify-center items-center">
          <h1 className="text-4xl font-extrabold">HRnet</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
