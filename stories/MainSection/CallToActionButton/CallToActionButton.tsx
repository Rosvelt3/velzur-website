/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface CallToActionButton {
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CallToActionButton = ({ label, ...props }: CallToActionButton) => {
	return (
		<button
			css={css`
				width: 10rem;
				height: 10rem;
				border: none;
				border-radius: 50%;
				font-family: 'Sequel Sans Semi Bold Disp', sans-serif;
				font-size: 1.5rem;
				color: #efefef;
				background-color: #731dff;
				&:hover {
					cursor: pointer;
					filter: brightness(85%);
				}
			`}
			type="button"
			{...props}
		>
			{label}
		</button>
	);
};
