import Link from 'next/link';
import NavbarStyle from './navbar.module.css'
import Image from 'next/image'
function Navbar() {
	return (
		<div className={NavbarStyle.wrapper}>
			<header className={NavbarStyle.header}>
				<div className={NavbarStyle.logo}>
					<Link href='/'>
						<Image 
							src="/images/hw_mainlogo.png"
							alt="Company Logo"
							width={310}
							height={150}
						/>
					</Link>
				</div>
					<ul className={NavbarStyle.navigation}>
						<li><Link href='/'>Home</Link></li>
						<li><Link href=''>Quotes & Estimates</Link></li>
						<li><Link href=''>Services</Link></li>
						<li><Link href=''>Our Team</Link></li>
					</ul>
			</header>
		</div>
	);
}
export default Navbar