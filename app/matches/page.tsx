import Image from "next/image";
import { useState } from "react";

const TeamDetails = ()=>{
    return(
        <>
                  <ul className="flex justify-around">
                        <li>
                        <div className="shadow-three bg-gray-dark rounded-sm  p-6 lg:mt-0 ">
                        <div className="relative h-20 w-20 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full flex items-center">
                        <span className="text-base font-large text-body-color pl-4">
                             Team Name
                        </span>
                        </div>
                        </li>
                        <li>
                
                <div className="shadow-three bg-gray-dark mb-10 rounded-sm ">
                <h2 className="flex justify-center items-center text-rose-500">VS</h2>
                <ul className="mt-2">
                  <li>
                     <h1 className="flex justify-center items center" style={{fontWeight:"bold",fontSize:"15px"}}>Date</h1>
                     <p className="flex justify-center items center">12/12/2023</p>
                  </li>
                  <li>
                     <h1 className="flex justify-center items center"  style={{fontWeight:"bold",fontSize:"15px"}}>Time</h1>
                     <p className="flex justify-center items center">10:30pm</p>
                  </li>

                </ul>
              </div>
                        </li>
                        <li>
                        <div className="shadow-three bg-gray-dark rounded-sm  p-6  lg:mt-0 ">
                        <div className="relative h-20 w-20 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full flex items-center">
                        <span className="text-base font-large text-body-color pl-4">
                             Team Name
                        </span>
                        </div>
                        </li>
                    </ul>
        </>
    )
}
const Match = ()=>{
    return(
        <>
         <div className="shadow-three bg-gray-dark mb-10 rounded-sm  mt-24 w-3/4 h-80 m-48 ">
               <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold  text-white">
                  Final
                </h3>
                <div className="w-full h-screen overflow-auto mt-12">         
                    <TeamDetails/>                     
                </div>
            </div>
            <div className="shadow-three bg-gray-dark mb-10 rounded-sm   mt-24 w-3/4 h-80 m-48 overflow-hidden">
               <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold  text-white">
                 Semi Final
                </h3>
                <div className="w-full"> 
                    <TeamDetails/>
                    <TeamDetails/> 
                    <TeamDetails/>                   
                </div>
            </div>
            <div className="shadow-three bg-gray-dark mb-10 rounded-sm   mt-24 w-3/4 h-screen m-48 overflow-hidden">
               <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold  text-white">
                  Match Schedule
                </h3>
                <div className="w-full h-screen overflow-auto">
                    
                    <TeamDetails/>
                    <TeamDetails/>
                    <TeamDetails/>
                    <TeamDetails/>
                    <TeamDetails/>
                     
                </div>
            </div>
        </>
    )
}

export default Match