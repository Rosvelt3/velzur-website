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
				position: sticky;
				top: 0;
				z-index: 9999;
				background: linear-gradient(
					to bottom,
					rgb(13, 13, 13) 0%,
					rgba(13, 13, 13, 0.738) 19%,
					rgba(13, 13, 13, 0.541) 34%,
					rgba(13, 13, 13, 0.382) 47%,
					rgba(13, 13, 13, 0.278) 56.5%,
					rgba(13, 13, 13, 0.194) 65%,
					rgba(13, 13, 13, 0.126) 73%,
					rgba(13, 13, 13, 0.075) 80.2%,
					rgba(13, 13, 13, 0.042) 86.1%,
					rgba(13, 13, 13, 0.021) 91%,
					rgba(13, 13, 13, 0.008) 95.2%,
					rgba(13, 13, 13, 0.002) 98.2%,
					transparent 100%
				);
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
						font-family: 'Sequel Sans Black Obl Body', sans-serif;
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
