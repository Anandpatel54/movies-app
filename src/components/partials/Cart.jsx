import { Link } from "react-router-dom";

const Cart = ({ data, title }) => {
  return (
    <div className="">
      {data.map((c, i) => (
        <Link className="w-[25vh]" key={i}>
          <img
            className="h-[45vh] h-[]"
            src={`https://image.tmdb.org/t/p/original/${
              c.poste_path || c.backdrop_path
            }`}
            alt=""
          />
          {c.name || c.title || c.original_name || c.original_title}
        </Link>
      ))}
    </div>
  );
};

export default Cart;
