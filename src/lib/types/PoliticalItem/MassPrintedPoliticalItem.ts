import type { PoliticalItem } from './PoliticalItem';

export interface MassPrintedPoliticalItem extends PoliticalItem {
	type: 'mass-printed';

	/**
	 * Type of printing
	 * @type {string} type of printing
	 * @example "brochure", "flyer", "poster", "billboard"
	 * @default "brochure"
	 */
	typeOfPrinting: string;
}
