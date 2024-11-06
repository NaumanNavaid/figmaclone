
import Image from "next/image";
import Header from "./component/header";
import React from 'react'
const Home = () => {
  return (
    <div className="h-screen">
<Header/>
<div className="h-4/5 flex">
<div className=" w-[100%] flex flex-col justify-center mt-9  ">
<h1 className="w-[496px] font-Librebodoni font-bold text-[40px] text-black  pl-[6.5rem]">
IMPECCABLE CRAFTSMANSHIP AND FINESSE
</h1>
<p className="  pl-[5.5rem] m-3 w-[902px]  font-LibreBodoni font-medium text-custom-brown2 text-[31px]"> 
An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
</p>
<button className="w-[260px] h-[50px] bg-custom-brown  rounded-xl ml-[82px]"><div className="font-Librebodoni text-[25px] text-white">Explore</div></button>
</div>

<div className="  flex items-center  w-[462] mt-5 pr-10">
  <Image
  src="/Images/figma.svg"
  width={462}
  height={647}
  alt="Figma"
  className="border-[10px] border-custom-brown rounded-tl-[100px] rounded-br-[100px] p-1 "
  />
    </div>
  </div>



 </div> )
}



export default Home

