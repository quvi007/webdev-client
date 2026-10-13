import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { HiSparkles } from "react-icons/hi2";
import { MdRocketLaunch } from "react-icons/md";
import { LuHouse } from "react-icons/lu";
import { BiBell } from "react-icons/bi";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <HiSparkles className="text-4xl text-blue-600" />
        <MdRocketLaunch className="text-4xl text-blue-600" />
        <LuHouse className="text-red-600" />
        <BiBell className="text-5xl text-blue-600" />
      </div>
    </div>
  );
}