import { MdKeyboardArrowRight } from "react-icons/md";
const ProductHd = (props) => {
  const { product } = props;

  return (
    <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize xl:pl-14">
      Home <MdKeyboardArrowRight /> shop <MdKeyboardArrowRight />{" "}
      {product.category} <MdKeyboardArrowRight /> {product.name}
    </div>
  );
};

export default ProductHd;
