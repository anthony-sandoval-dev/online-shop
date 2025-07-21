import ComplementosImage from "@/images/complementos.webp";
import PlantasImage from "@/images/plantas.webp";
import RamosImage from "@/images/ramos.webp";

export const config = {
	categories: [
		{ name: "Ramos", slug: "ramos", image: RamosImage },
		{ name: "Plantas", slug: "plantas", image: PlantasImage },
		{ name: "Complementos", slug: "complementos", image: ComplementosImage },
	],

	social: {
		x: "https://x.com/yourstore",
		facebook: "https://facebook.com/yourstore",
	},

	contact: {
		email: "support@yourstore.com",
		phone: "+1 (555) 111-4567",
		address: "123 Store Street, City, Country",
	},
};

export type StoreConfig = typeof config;
export default config;
