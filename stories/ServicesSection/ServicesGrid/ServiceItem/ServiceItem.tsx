/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import listItemIcon from '../../../../public/images/list-item-icon.svg';

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

export const ServiceItem = ({ title, description, itemsList }: ServiceItemProps) => {
	return (
		<div
			css={css`
				border-top: 6px #efefef solid;
				padding-top: 3.4rem;
			`}
		>
			<h4>{title}</h4>
			<p>{description}</p>
			<ul
				css={css`
					font-family: 'Sequel Sans Medium Disp', sans-serif;
					font-size: 1.25rem;
					list-style: none;
					line-height: 1.5;
				`}
			>
				{itemsList.map((item) => (
					<li
						css={css`
							display: flex;
							align-items: center;
						`}
						key={item}
					>
						<Image src={listItemIcon} width={24} height={24} />
						<div
							css={css`
								margin-right: 0.5rem;
							`}
						/>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
