import Image from "next/image";
import connectMongoDB from "../../config/mongodb";

export default function Home() {
  connectMongoDB();
  return (
    <div><p>main page where stuff will go</p></div>
  );
}
