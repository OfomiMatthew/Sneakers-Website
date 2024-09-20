import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReview = () => {
  return (
    <section className="max-container py-10">
      <h3 className="font-palanquin text-center text-4xl font-semibold py-5">
        What Our
        <span className="text-coral-red"> Customers </span>
        are saying
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        voluptate nam corporis quia veniam necessitatibus quo laborum iusto
        totam pariatur quibusdam beatae animi soluta voluptates vero saepe
        architecto ex explicabo.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
