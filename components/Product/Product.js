import Link from "next/link";
import { fromImageToUrl } from "../../utils/urls";
import Div from "./product_style";

// const actions = [
//   { icon: <FileCopyIcon />, name: "Copy" },
//   { icon: <SaveIcon />, name: "Save" },
//   { icon: <PrintIcon />, name: "Print" },
//   { icon: <ShareIcon />, name: "Share" },
//   { icon: <FavoriteIcon />, name: "Like" },
// ];

function Product({ product }) {
  return (
    <Div key={product.name}>
      <Link href={`/products/${product.slug}`}>
        <a>
          <div className="product_column">
            <div className="product_image">
              <img src={fromImageToUrl(product.image)} alt="" />
            </div>
            <div>{product.name}</div>
            <div>{product.price} Kč</div>
          </div>
        </a>
      </Link>
    </Div>
  );
}

export default Product;
