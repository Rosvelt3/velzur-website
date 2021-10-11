/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ServiceItem, ServiceItemProps } from './ServiceItem/ServiceItem';

interface ServiceGridProps {
	/**
	 * List of services to show in the grid
	 */
	services: ServiceItemProps[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
	return (
		<div
			css={css`
				display: grid;
				grid-template-columns: repeat(2, auto);
				gap: 8rem 4rem;
				grid-auto-rows: auto;
			`}
		>
			{services.map((service) => (
				<ServiceItem
					title={service.title}
					description={service.description}
					itemsList={service.itemsList}
					key={service.title}
				/>
			))}
		</div>
	);
};
