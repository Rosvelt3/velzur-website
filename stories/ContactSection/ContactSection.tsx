/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { css } from '@emotion/react';

export const ContactSection = () => (
	<section>
		<div>
			<h2
				css={css`
					max-width: 45rem;
				`}
			>
				Es hora de convertir tus ideas en realidad.
			</h2>
			<p
				css={css`
					max-width: 35rem;
				`}
			>
				Agenda una llamada gratis con nosotros en el botón de “Consúltanos” o envíanos un
				correo electrónico a{' '}
				<Link href="mailto:contact@velzur.com">
					<a>contact@velzur.com</a>
				</Link>
			</p>
		</div>
	</section>
);
