/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ServiceGrid } from './ServicesGrid/ServicesGrid';

const services = [
	{
		title: 'Branding',
		description:
			'Un aspecto determinante que ayuda a las empresas a posicionarse dentro de un nicho. Es una inversión que a largo plazo ayudará a aumentar las ventas, atraer nuevos clientes y sobretodo ser memorable.',

		itemsList: [
			'Diseño de logo',
			'Identidad de marca',
			'Publicidad para redes sociales',
			'Lenguaje visual',
			'Copywriting'
		]
	},
	{
		title: 'Tecnología',
		description:
			'Con nuestro equipo de desarrollo podremos darle vida a los diseños que hemos creado para ti previamente. No te preocupes, contamos con el uso de las mejores prácticas en la industria.',

		itemsList: [
			'Arquitectura técnica',
			'Creatividad tecnológica',
			'Desarrollo back-end',
			'Desarrollo front-end',
			'Prototipos interactivos',
			'Implementación CMS',
			'Control de calidad',
			'Mantenimiento'
		]
	},
	{
		title: 'Diseño de interfaces (UI/UX)',
		description:
			'Creamos experiencias digitales más allá de lo estético: funcionales, accesibles, que convierten y retienen a los usuarios.',

		itemsList: [
			'Paginas web',
			'Aplicaciones iOS/Android',
			'Prototipos',
			'Sistema de diseño',
			'Arquitectura de Información',
			'Flujo de usuario'
		]
	},
	{
		title: 'Estrategia de producto',
		description:
			'La estrategia de producto es el primer paso hacia alcanzar con éxito las metas. Aquí lo más importante es alinear los objetivos de negocio con los objetivos de los usuarios para alcanzar máxima sinergia.',

		itemsList: [
			'Tendencias del mercado',
			'Estrategia de negocio',
			'Estrategia de contenido',
			'Optimización de motor de búsqueda',
			'Manejo de experiencia de cliente',
			'Optimización de rendimiento',
			'Manejo de datos'
		]
	}
];

export const ServicesSection = () => (
	<section>
		<div
			css={css`
				max-width: 50rem;
				margin: auto;
				margin-bottom: 6.25rem;
			`}
		>
			<h3
				css={css`
					text-align: center;
					margin-bottom: 2rem;
				`}
			>
				En caso de que te preguntes cuáles servicios ofrecemos
			</h3>
			<p>
				Nuestro propósito principal es simple: ayudarte a maximizar y potenciar tus ideas.
				Por eso desarrollamos y guiamos todo el proceso de creación de producto desde lo más
				abstracto hasta alcanzar el objetivo que juntos trazamos.
			</p>
		</div>
		<div>
			<ServiceGrid services={services} />
		</div>
		<div
			css={css`
				margin-bottom: 20rem;
			`}
		></div>
		<div
			css={css`
				margin-bottom: 18rem;
			`}
		></div>
		<h2
			css={css`
				text-align: center;
			`}
		>
			Somos humanos que trabajamos por humanos.
		</h2>
	</section>
);
