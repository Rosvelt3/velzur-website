/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import { css } from '@emotion/react';
import velzurLogo from '../../public/images/velzur-logo.svg';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';

interface NavbarProps {
	/**
	 * Website language selected
	 */
	language?: string;
}

export const Navbar = ({ language = 'ES' }: NavbarProps) => {
	const menuItems = [
		{
			text: 'Home',
			path: '/'
		},
		{
			text: 'Nosotros',
			path: '/nosotros'
		},
		{
			text: 'Servicios',
			path: '/servicios'
		},
		{
			text: 'Equipo',
			path: '/equipos'
		}
	];

	return (
		<nav
			css={css`
				display: flex;
			`}
		>
			<div
				css={css`
					display: flex;
					height: 6.25rem;
					flex-basis: 90%;
					flex-shrink: 1;
					justify-content: space-between;
					align-items: center;
				`}
			>
				<Image src={velzurLogo} width={137.8} height={27} />

				<span
					css={css`
						font-family: 'Sequel Sans Black Obl Body';
						font-size: 1.5rem;
						color: #efefef;
					`}
				>
					{language}
				</span>
				<div></div>
			</div>
			<NavbarMenu menuItems={menuItems} />
		</nav>
	);
};
