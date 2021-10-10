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
				padding: 1.5rem 1rem 1.5rem 1rem;
				border: none;
				border-radius: 3px;
				font-family: 'Sequel Sans Semi Bold Disp';
				font-size: 2rem;
				color: #efefef;
				background-color: #731dff;
				&:hover {
					cursor: pointer;
				}
			`}
			type="button"
			{...props}
		>
			{label}
		</button>
	);
};
