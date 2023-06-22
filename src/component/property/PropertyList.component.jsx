import React from 'react';
import Property from 'component/property/Property.component';
import { useParams } from 'react-router-dom';
const PropertyList = (props) => {
  const { movieId } = useParams();
  return (
    <>
      {movieId ? (
        <div className="flex justify-center items-center text-md mb-8 gap-x-5 font-bold text-pink-500">
          {props.property.length && props.property.map(item =>
            <Property key={item.id} name={item.name}></Property>
          )}
        </div>) :
        (<div className="flex justify-start items-center text-sm mb-8 gap-x-3 font-bold">
          {props.property.length && props.property.map(item =>
            <Property key={item.id} name={item.name}></Property>
          )}
        </div>)}
    </>
  );
};

export default PropertyList;