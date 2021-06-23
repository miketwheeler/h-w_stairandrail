import React from 'react'
import MainsectionStyle from './mainsection.module.css'
import HomePage from '../components/mainsections/home-main'

function Mainsection() {
	return (
		<div className={MainsectionStyle.objparams}>
			<HomePage />
		</div>
	)
}

export default Mainsection
