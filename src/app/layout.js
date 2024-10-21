

import SearchContextProvider from "@/context/filteredList";
import "./globals.css";


export const metadata = {
  title: "Pokedex",
  description: "Gotta catch em all",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className="">
        
          {children}
          {/* <main className= " bg-[#FFFFFF]">
          </main> */}
        </body>
      </html>
    </SearchContextProvider>
  );
}
