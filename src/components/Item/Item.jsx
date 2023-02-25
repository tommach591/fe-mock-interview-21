import "./Item.css";

function Item({ item, add }) {
  return (
    <div
      className="Item"
      onClick={() => {
        add(item);
      }}
    >
      <h1>{item}</h1>
    </div>
  );
}

export default Item;
