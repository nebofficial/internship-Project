import React from "react";

function Teamcard({ item }) {

  return (
    <>
    
      <div className="mt-4 my-3 p-3">
        <div className="card w-80 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="team" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
           
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Teamcard;