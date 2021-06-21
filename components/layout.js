import { Fragment } from "react"
import LayoutStyle from './layout.module.css'
import Navbar from './navbar'

function Layout(props){
	return (
		<Fragment>
			<Navbar />
			<div className={LayoutStyle.wrapper}>
				<main>
					{props.children}
				</main>
			</div>
		</Fragment>
	)
}
export default Layout;