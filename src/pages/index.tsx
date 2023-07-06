import { Inter } from "next/font/google";
import BankList from "@/views/BankList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen pb-8 flex items-center justify-center border-2 border-black bg-gradient-to-br from-gray-900 to-gray-700 shadow-inner overflow-y-auto">
      <BankList />
    </div>
  );
}
