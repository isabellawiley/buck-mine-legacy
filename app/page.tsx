import Image from "next/image";
import styles from "../page.module.css";
import pit from "@/public/open-pit.jpg";

export default function Home() {
  return (
    <div className="flex-grow relative items-center">
      <div className="h-[90%] mx-2 my-3 relative self-center">
          <Image src={pit} alt="pit" fill={true} objectFit="cover"/>
      </div>
    </div>
  );
}
