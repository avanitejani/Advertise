// import React from 'react'

// const Loader = () => {
//   return (
//     <div id="loading-area" className="loading-page-1">
//       <div className="loadertwo">
// 		<div className="loading-dot"></div>
// 	</div>
// </div>
//   )
// }

// export default Loader

import React, { useState, useEffect } from 'react';

const Loader = () => {
  // Define loaders as an array of JSX elements
  const loaders = [
    { key: 'loaderfirst', element: <div className="loaderfirst"></div> },
    { key: 'loadertwo', element: <div className="loadertwo"></div> },
    { key: 'loaderthree', element: <div className="loaderthree"></div> },
    { key: 'loaderfour', element: <div className="loaderfour"></div> },
    { key: 'loaderfive', element: <div className="loaderfive"></div> },
  ];

  // State to store the randomly selected loader
  const [randomLoader, setRandomLoader] = useState(null);

  // Select a random loader on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loaders.length);
    setRandomLoader(loaders[randomIndex]);
  }, []); // Empty dependency array ensures this runs only once


  return (
    <div id="loading-area" className="loading-page-1" >
      {/* {randomLoader} */}
      {randomLoader && <div key={randomLoader.key}>{randomLoader.element}</div>}
    </div>
  );
};

export default Loader;
















// import React from 'react'

// const Loader = () => {
//   return (
//     <div id="loading-area" className="loading-page-1">
//               <div className="loaderfirst"></div>
//               <div className="loadertwo "></div>
//               <div className="loaderthree "></div>
//               <div className="loaderfour "></div>
//               <div className="loaderfive "></div>
//               <div className="loadersix "></div>

// 		<div className="loading-dot"></div>

// </div>
//   )
// }

// export default Loader



// import React, { useState, useEffect } from 'react';

// const Loader = () => {
//   // Define loaders as an array of JSX elements
//   const loaders = [
//     { key: 'loaderfirst', element: <div className="loaderfirst"></div> },
//     { key: 'loadertwo', element: <div className="loadertwo"></div> },
//     { key: 'loaderthree', element: <div className="loaderthree"></div> },
//     { key: 'loaderfour', element: <div className="loaderfour"></div> },
//     { key: 'loaderfive', element: <div className="loaderfive"></div> },
//   ];

//   // State to store the randomly selected loader
//   const [randomLoader, setRandomLoader] = useState(null);

//   // Select a random loader on component mount
//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * loaders.length);
//     setRandomLoader(loaders[randomIndex]);
//   }, []); // Empty dependency array ensures this runs only once


//   return (
//     <div id="loading-area" className="loading-page-1" >
//       {/* {randomLoader} */}
//       {randomLoader && <div key={randomLoader.key}>{randomLoader.element}</div>}
//     </div>
//   );
// };

// export default Loader;
