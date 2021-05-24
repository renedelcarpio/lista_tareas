import React, { useState, useEffect } from 'react';
import './App.css';
import FormularioTareas from './components/FormularioTareas';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';

const App = () => {
	// Obtenemos las tareas guardadas de local storage
	const tareasGuardadas = localStorage.getItem('tareas')
		? JSON.parse(localStorage.getItem('tareas'))
		: [];

	// Establecemos el estado de las tareas
	const [tareas, cambiarTareas] = useState(tareasGuardadas);

	// Guardando el estado de local storage
	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tareas));
	}, [tareas]);

	// Accedemos a localstorage y comprobamos si mostrarCompletadas es null
	let configMostrarCompletadas = '';
	if (localStorage.getItem('mostrarCompletadas') === null) {
		configMostrarCompletadas = true;
	} else {
		configMostrarCompletadas =
			localStorage.getItem('mostrarCompletadas') === 'true';
	}

	// El estado de mostrar completadas
	const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
		configMostrarCompletadas
	);

	useEffect(() => {
		localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
	}, [mostrarCompletadas]);

	return (
		<div className='contenedor'>
			<Header
				mostrarCompletadas={mostrarCompletadas}
				cambiarMostrarCompletadas={cambiarMostrarCompletadas}
			/>
			<FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
			<ListaTareas
				tareas={tareas}
				cambiarTareas={cambiarTareas}
				mostrarCompletadas={mostrarCompletadas}
			/>
		</div>
	);
};

export default App;
