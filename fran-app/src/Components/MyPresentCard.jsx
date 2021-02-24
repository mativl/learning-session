import React, { useContext, useEffect } from 'react';
import H1 from './H1';
import { AppContext } from '../Context/AppContext';

export default function MyPresentCard() {
	const { myName, setMyName } = useContext(AppContext);

	return (
		<div>
			<H1 miNombre={myName} otrasCosas="mas cosas" />
			<h3> {myName} como vas?</h3>
			<button onClick={() => setMyName('Matias')}> Cambiar nombre </button>
		</div>
	);
}

/**
 *  React Component LifeCicle:
 *
 *  antes de que renderice --> beforeMount()
 *  despues de que renderice --> didMount()
 *  destruye -->didExits()
 */
