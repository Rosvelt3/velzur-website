/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PhilosophyItem, PhilosophyItemProps } from './PhilosophyItem/PhilosophyItem';

interface PhilosophyListProps {
	/**
	 * List of philosophies to show in the list
	 */
	philosophies: PhilosophyItemProps[];
}

export const PhilosophyList = ({ philosophies }: PhilosophyListProps) => (
	<div
		css={css`
			display: flex;
			justify-content: center;
		`}
	>
		{philosophies.map((philosophy, index) => {
			if (index === 0) {
				return (
					<PhilosophyItem
						css={css`
							margin-right: -10rem;
						`}
						title={philosophy.title}
						description={philosophy.description}
						key={philosophy.title}
					/>
				);
			}

			if (index % 2 === 0 && index !== 0) {
				return (
					<PhilosophyItem
						css={css`margin-left: -10rem;`}
						title={philosophy.title}
						description={philosophy.description}
						key={philosophy.title}
					/>
				);
			}

			return (
				<PhilosophyItem
					css={css`
						margin-top: 20rem;
					`}
					title={philosophy.title}
					description={philosophy.description}
					key={philosophy.title}
				/>
			);
		})}
	</div>
);
