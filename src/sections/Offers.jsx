import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images"
import Button from "../components/Button";


const Offers = ()=>{
	return (
		<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
			
			<div className="flex-1">
				<img src={offer} width={500} height={500} alt="" className="object-contain w-full" />
			</div>
			<div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        
          <span className="text-coral-red"> Special </span>
          
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring Comfort and Style</p>
        <p className="mt-6 lg:max-w-lg info-text">
          Your satisfaction is our priority
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}/>
		  <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-black"/>
        </div>
      </div>
			
			</section>
	)
}

export default Offers