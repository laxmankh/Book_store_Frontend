import PropTypes from "prop-types";
import Contact from "./Contact";
import { useState } from "react";
const Cards = ({ item }) => {
  // const [showForm, setShowForm] = useState(false);
  // const handleBuyClick = () => {
  //   setShowForm(true);
  // };
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-80 h-[32rem] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white border-none">
          <figure className="w-full h-64 overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={item.image}
              alt="Book"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex items-center justify-between">
              {item.name}
              <div className="badge badge-secondary whitespace-nowrap px-2 py-1">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <a href="/Details">
                <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                  Buy Now
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    new: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
};

export default Cards;
