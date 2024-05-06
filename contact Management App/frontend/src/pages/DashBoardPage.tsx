import React, { useState } from 'react';
import Charts from '../components/Charts';
import Map from '../components/Map';

const DashboardPage: React.FC = () => {

  const [showMap, setShowMap] = useState(true);

  return (
    <div className='container mx-auto px-4 lg:p-8 flex flex-col justify-start items-center gap-4'>
      <div className="w-full max-w-4xl">
        {!showMap && <Charts />}
        {showMap && <Map />}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
          type="button"
          onClick={() => setShowMap(prev => !prev)}
        >
          {showMap ? "Show Charts" : "Show Map"}
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
