import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
	const [myName, setMyName] = useState('Fran');
	const myStore = {
		myName,
		setMyName,
	};

	return (
		<AppContext.Provider value={myStore}>{props.children}</AppContext.Provider>
	);
};

export default AppContextProvider;
