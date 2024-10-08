import React from 'react'
import timelineElements from '@/data/index'
import Image from 'next/image';


interface TimelineProps {
  defaultColor?: string;
}

const Timeline: React.FC<TimelineProps> = ({defaultColor}) => {
  return (
    <div>
        {timelineElements.map((element) => { 
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const colors = [
                    "bg-red-500",
                    "bg-blue-500",
                    "bg-yellow-500",
                    "bg-purple-500",
                    "bg-orange-500",
                  ];
          
                  const color = defaultColor || `bg-${element.color}-500`;

                return (
                    <div key={element.id} className="flex m-5 relative">
                         
                        <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                            <div className="w-4/5 text-blue-500 font-semibold">{element.startDate} <br/> {element.endDate}</div>
                            <div className={`${color} w-1 h-full translate-x-5 translate-y-10 opacity-30`}></div>
                    	    <Image src={`/icons/${element.icon}.svg`} alt={element.icon} width={20} height={20} className={`${color} w-10 p-1 rounded-lg z-20 text-slate-100 dark:text-slate-100 `}/>
                            <div className={`${color} h-1 w-8 translate-y-5 opacity-30`}></div>
                        </div>
                            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-card w-full text-center z-10 sm:w-96 md:w-[32rem]">
                            <div className="text-2xl font-semibold text-blue-500">{element.title}</div>
                            <div className="mb-6 sm:mb-8 sm:text-xs md:text-lg">
                                {element.location}
                                <br />
                                <span className="sm:hidden text-blue-500">{element.startDate} - {element.endDate}</span>
                            </div>
                            <div className="mb-2 text-left">{element.description}</div>
                            {/* In the future, I will add a video or image to the project
                            <div className="p-4 mb-2">
                                <Image src="/placeholder.svg" alt="Project" width={400} height={225} className="object-cover w-[100%] h-[100%] aspect-video rounded-md"/>
                            </div>
                            */}
                            <Image src={`/icons/${element.icon}.svg`} alt={element.icon} width={20} height={20} className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 bottom-4 sm:hidden`}/>

                            <div className="flex flex-wrap mb-6 px-5 justify-center">
                                {element.compentencies.map((compentency, index) => {
                                return (
                                    <span
                                    key={index}
                                    className="bg-blue-500 rounded-xl px-2 py-1 text-sm m-1"
                                    >
                                    {compentency}
                                    </span>
                                );
                                
                                })}
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Timeline