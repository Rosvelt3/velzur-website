/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { css } from '@emotion/react';

interface MenuItem {
	text: string;
	path: string;
}

interface NavbarMenuProps {
	/**
	 * Items to show
	 */
	menuItems: MenuItem[];
}

export const NavbarMenu = ({ menuItems }: NavbarMenuProps) => (
	<ul
		css={css`
			font-family: 'Sequel Sans Bold Disp', sans-serif;
			list-style: none;
			flex-basis: 10%;
			margin-top: 2.75rem;
		`}
	>
		{menuItems.map((item) => (
			<li
				css={css`
					padding-bottom: 1.5rem;
				`}
				key={item.text}
			>
				<Link href={item.path}>
					<a
						css={css`
							color: #efefef;
							font-size: 1.8rem;
						`}
					>
						{item.text}
					</a>
				</Link>
			</li>
		))}
	</ul>
);
