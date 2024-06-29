import { Link } from "react-router-dom";

const Cart = ({ data, title }) => {
  return (
    <div className="">
      {data.map((c, i) => (
        <Link key={i}>
            <img src="" alt="" />
          {c.name || c.title || c.original_name || c.original_title}
        </Link>
      ))}
    </div>
  )
};

export default Cart;
