/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface PhilosophyItemProps {
	/**
	 * Text for the title
	 */
	title: string;
	/**
	 * Text for the description
	 */
	description: string;
}
export const PhilosophyItem = ({ title, description, ...props }: PhilosophyItemProps) => (
	<div
		css={css`
			width: 30rem;
			height: 30rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border: solid 3px;
			border-radius: 50%;
			color: rgba(255, 255, 255, 0.3);
			&:hover {
				border-color: #731dff;
			}
		`}
		{...props}
	>
		<div
			css={css`
				flex-basis: 70%;
			`}
		>
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	</div>
);
