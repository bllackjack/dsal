import React from "react";
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>dsal - Coming Soon</title>
      </head>
      <body className="bg-darkGreen text-white flex flex-col items-center justify-center h-screen">
        {

        }
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
