import React from "react";
import ContactCard from "./ContactCard";

const Grid = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 20 }, (e, i) => (
          <ContactCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
