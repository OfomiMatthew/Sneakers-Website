import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const Quality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Best</span>
          <br />
          <span className="text-coral-red"> Quality</span>
          Adire
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring Comfort and Style</p>
        <p className="mt-6 lg:max-w-lg info-text">
          Your satisfaction is our priority
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          width={500}
          height={500}
          className="object-contain"
          alt=""
        />
      </div>
    </section>
  );
};

export default Quality;
