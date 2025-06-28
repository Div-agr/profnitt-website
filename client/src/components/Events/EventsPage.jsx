import Navbar from "../Home page/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import Card from "./Card.jsx";
import { events } from "../../constants/index.js";

const EventsPage = () => {
  return (
    <div className="text-white">
      <Navbar />
      <div className="mx-auto py-10 w-[80%]">
        <h1 className="text-6xl font-bold text-center mb-12 font-clashDisplay">
          Events
        </h1>
        <p className="text-xl font-DMSans mt-3 text-center pb-6">
  Our club hosts a diverse range of events designed to engage and educate members across various facets of finance and investment. From stock market simulations and portfolio management challenges to financial literacy workshops and expert speaker sessions, our events cater to enthusiasts at all levels. We explore areas such as equity research, algorithmic trading, corporate finance, personal wealth management, and economic policy discussions, fostering a collaborative environment for learning, networking, and hands-on experience in the world of finance.
</p>

        <br></br>

        {/* Grid Container */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-12 gap-x-32 place-items-center">
          {events.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
