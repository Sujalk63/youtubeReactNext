import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard title={"'Portl' का Tech लगा Shark Aman को Jhakaas | Shark Tank India S2 | Pitches"} image={"logo.jpg"} author={"Sujal Karmakar"} views={"45M"} timestamp={"7 days ago"} ></VideoCard>
    </div> 
  )
}
