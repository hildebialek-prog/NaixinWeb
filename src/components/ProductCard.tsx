import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  category: string;
  isNew?: boolean;
  onSale?: boolean;
  salePrice?: number;
  hidePrice?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  hoverImage,
  category,
  isNew,
  onSale,
  salePrice,
  hidePrice = false,
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="product-card bg-card border border-border rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          {hoverImage && (
            <img
              src={hoverImage}
              alt={`${name} alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-accent text-accent-foreground">NEW</Badge>
            )}
            {onSale && (
              <Badge className="bg-destructive text-destructive-foreground">
                SALE
              </Badge>
            )}
          </div>

          {/* Quick View */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button className="w-full rounded-none bg-primary/90 hover:bg-primary">
              QUICK VIEW
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-accent transition-colors">
            {name}
          </h3>
          {!hidePrice && (
            <div className="flex items-center gap-2">
              {onSale && salePrice ? (
                <>
                  <span className="text-destructive font-semibold">
                    ${salePrice.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground line-through text-sm">
                    ${price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="font-semibold">${price.toFixed(2)}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
