/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface ServiceItemProps {
	/**
	 * Text for the title
	 */
	title: string;
	/**
	 * Text for the description
	 */
	description: string;
	/**
	 * Teft for the items to be showed after the description
	 */
	itemsList: string[];
}

export const ServiceItem = ({ title, description, itemsList}: ServiceItemProps) => {
	return (
		<div
			css={css`
				border-top: 6px #efefef solid;
				padding-top: 3.4rem;
			`}
		>
			<h5>{title}</h5>
			<p>{description}</p>
			<ul
				css={css`
					font-family: 'Sequel Sans Medium Disp';
					font-size: 2rem;
					list-style: disc;
					list-style-position: inside;
					line-height: 3rem;
				`}
			>
				{itemsList.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};
