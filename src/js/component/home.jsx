import React from "react";

//include images into your bundle
import Counter from "/workspaces/react-simple-counter/src/js/component/counter.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 mt-5">
    	<div className="d-flex flex-wrap w-50 m-auto text-black counter-wrapper">

        <div className="flex-fill text-center m-2 py-4 border-dark border">
          <h1><Counter valor={3434}/></h1>
        </div>

    </div>
  </div>
	);
};

export default Home;
