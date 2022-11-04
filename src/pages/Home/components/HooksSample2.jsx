import { useState } from "react";

/*
    This part includes;
    -> useCallback
    -> useMemo
    -> React.memo
*/
let lastId = 0;

const HookSample2 = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Klavye" },
    { id: 1, name: "Mouse" },
    { id: 1, name: "Monitor" },
  ]);
  const [bucket, setBucket] = useState([]);

  const addBucket = (id) => {
    setBucket([...bucket, products.find((p) => p.id === id)]);
  };

  return (
    <div style={{ marginTop: 16 }}>
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        {products.map((p) => (
          <Product addBucket={addBucket} product={p} />
        ))}
      </div>
      <h1>Card</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        {bucket.map((c) => (
          <CardItem item={c} />
        ))}
      </div>
    </div>
  );
};

const Product = ({ product, addBucket }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        width: "200",
        height: "200",
      }}
    >
      <h4>
        {product.id} - {product.name},
        <button onClick={() => addBucket(product.id)}>Add to card</button>
      </h4>
    </div>
  );
};

const CardItem = ({ item }) => {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "1rem",
          width: "200",
          height: "200",
        }}
      >
        <h4>
          {item.id} - {item.name},
        </h4>
      </div>
    );
  };

export default HookSample2;
