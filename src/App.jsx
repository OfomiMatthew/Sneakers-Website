import {
  Hero,
  Footer,
  Services,
  Offers,
  Quality,
  Products,
  CustomerReview,
  Subscribe,
} from "./sections/index";
import Nav from "./components/Nav";
export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <Offers />
      </section>
      <section className="bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
