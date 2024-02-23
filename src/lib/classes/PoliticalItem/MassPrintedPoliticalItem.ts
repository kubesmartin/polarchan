import { PoliticalItem } from './PoliticalItem';

export class MassPrintedPoliticalItem extends PoliticalItem {
	/**
	 * Type of printing
	 * @type {string} type of printing
	 * @example "brochure", "flyer", "poster", "billboard"
	 * @default "brochure"
	 */
	typeOfPrinting: string;
}
