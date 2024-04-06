import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const Products = () => {
	return (
		<section id="products" className="max-container max-sm:mt-12">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold">
					Our <span className="text-coral-red">Popular</span> Products
				</h2>
				<p className="lg:max-w-lg:mt-2 font-montserrat text-slate-gray">
					Experience Quality and Style
				</p>
			</div>

			<div className="mt-16 grid lg:gid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
				{products.map((item) => (
					<PopularProductCard key={item.name} {...item} />
				))}
			</div>
		</section>
	);
};

export default Products;
