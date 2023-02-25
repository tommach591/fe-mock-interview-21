import Item from "../Item/Item";
import "./List.css";

function List({ selected, fruits, add }) {
  return (
    <div className="List">
      {fruits.map((item, i) => {
        if (!selected.includes(item))
          return <Item key={i} item={item} add={add} />;
        else return <div key={i} />;
      })}
    </div>
  );
}

export default List;
