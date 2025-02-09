import Link from "next/link";
import BarChart from "./components/BarChart";
import Shamah from "./components/Shamah";

export default function Home() {
  return (
    <div>
      <div
        className="container justify-center items-center text-center text-3xl font-sans font-bold 
        text-gray-900"
      >
        Chart js
      </div>
      <BarChart />
      <Shamah />
      <Link href={'/account'} >
        <button className="p-2 bg-black text-white border border-red-500 rounded-full">
          Go to account
        </button>
      </Link>
    </div>
  );
}
