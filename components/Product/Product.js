import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import { fromImageToUrl } from "../../utils/urls";
import Div from "./product_style";

// const actions = [
//   { icon: <FileCopyIcon />, name: "Copy" },
//   { icon: <SaveIcon />, name: "Save" },
//   { icon: <PrintIcon />, name: "Print" },
//   { icon: <ShareIcon />, name: "Share" },
//   { icon: <FavoriteIcon />, name: "Like" },
// ];
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Product({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
      </CardActionArea>
    </Card>
  );
}

export default Product;
