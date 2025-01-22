import React, { Fragment } from "react";



  const Projects = ({events}) => {
    return (
      <div className="flex flex-col gap-y-3 w-full min-h-screen bg-slate-800 justify-center items-center px-4 py-10">
        {events.map((event, key) => (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
              {event.direction === "left" && (
                <EventCard
                  Heading={event.Heading}
                  subHeadings={event.subHeadings}
                  date={event.date}
                />
              )}
              <Pillar />
              {event.direction === "right" && (
                <EventCard
                  Heading={event.Heading}
                  subHeadings={event.subHeadings}
                  date={event.date}
                />
              )}
            </div>
            {key < events.length - 1 && <Circle />}
          </Fragment>
        ))}
      </div>
    );
  };
  

const Circle = () => (
  <div className="rounded-full w-4 h-4 bg-slate-700 mx-auto shadow-lg"></div>
);

const Pillar = () => (
  <div className="w-1 h-40 bg-slate-700 mx-auto shadow-lg"></div>
);

const EventCard = ({ Heading, subHeadings, date }) => {
    return (
      <div className="flex neon-glow flex-col gap-y-2 border-shadow-md rounded-xl p-4 md:w-[550px] w-[90%] cursor-pointer h-auto bg-zinc-500 bg-opacity-50 border-2 border-slate-500 hover:shadow-lg hover:border-blue-500 md:hover:scale-[1.05] transition-all duration-400 ease-in">
        <div className="text-white font-bold text-lg border-b">{Heading}</div>
        <div className="text-slate-200 text-sm italic mb-2">{date}</div>
        <ul className="text-slate-100 font-bold text-sm">
          {subHeadings.map((sub, index) => (
            <li key={index} className="mb-1">
              - {sub}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Projects;
