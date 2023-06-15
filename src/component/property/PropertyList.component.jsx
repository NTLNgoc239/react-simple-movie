import React from 'react';
import Property from './Property.component';
const PropertyList = (props) => {
  return (
    <div className="flex justify-start items-center text-sm mb-8 gap-x-3 font-bold">
      {props.property.length && props.property.map(item =>
        <Property key={item.id} name={item.name}></Property>
      )}
    </div>
  );
};

export default PropertyList;