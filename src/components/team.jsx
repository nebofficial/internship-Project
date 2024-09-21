import React from 'react'

import list from "../../public/list.json";
import Teamcard from './Teamcard';



const filterData = list.filter((data) => data.category === "team");


function Team() {
  
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl  mt-28 md:text-4xl">
            Teacher Team
            
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          
          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {filterData.map((item)=>(<Teamcard item={item}key={item.id}/>))} 
        
        </div>
      </div>
    </>
  );
}

export default Team;