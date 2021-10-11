/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import { css } from '@emotion/react';
import velzurLogo from '../../public/images/velzur-logo.svg';
import linkedinLogo from '../../public/images/linkedin-icon.svg';
import instagramLogo from '../../public/images/instagram-icon.svg';
import facebookLogo from '../../public/images/facebook-icon.svg';

export const Footer = () => (
	<footer
		css={css`
			display: flex;
			max-width: 100rem;
            padding: 5rem;
			justify-content: space-between;
		`}
	>
		<div
			css={css`
				flex-shrink: 1;
                flex-basis: 80%;
			`}
		>
			<Image src={velzurLogo} width={275.6} height={54} />
		</div>

		<div
			css={css`
				display: flex;
				justify-content: space-between;
				flex-basis: 10%;
			`}
		>
			<Image src={linkedinLogo} width={32} height={32} />
			<Image src={instagramLogo} width={32} height={32} />
			<Image src={facebookLogo} width={32} height={32} />
		</div>
	</footer>
);
