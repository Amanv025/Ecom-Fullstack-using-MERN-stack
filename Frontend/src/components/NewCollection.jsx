import { useState,useEffect } from "react";
import Item from "./Item";

const NewCollection = () => {
  const[new_collection,setNew_collection]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/newcollection").then((response)=>response.json()).then((data)=>setNew_collection(data));

  }, [])
  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">New Collections</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {new_collection.map((items) => (
            <Item
              key={items.id}
              id={items.id}
              image={items.image}
              name={items.name}
              new_price={items.new_price}
              old_price={items.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
