'use client';
import { useRouter } from "next/navigation";
export default function Home() {
  const {push} = useRouter();
  console.log("HELLO THERE");
  let loggedIn = false;
  if(!loggedIn){
    push("/login");
  }
  return (
    <div>
      <h1 className="text-red">Welcome to my next todo app</h1>
    </div>
  )
}
