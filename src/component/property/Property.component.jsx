import React from 'react';

const Property = (props) => {
  return (
    <span className="py-2 px-4 border-solid border-[1px] rounded-md mr-2 capitalize">
      {props.name}
    </span>
  );
};

export default Property;