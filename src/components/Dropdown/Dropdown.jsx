import { useCallback, useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import List from "../List";
import Selected from "../Selected/Selected";

function Dropdown() {
  const dropdownRef = useRef(null);
  const [drop, setDrop] = useState(true);
  const [selected, setSelected] = useState(["apple", "orange"]);

  const fruits = [
    "apple",
    "orange",
    "coconut",
    "plum",
    "pear",
    "strawberry",
    "peach",
    "lime",
  ];

  const remove = useCallback(
    (item) => {
      let newSelected = [...selected];
      newSelected.splice(newSelected.indexOf(item), 1);
      setSelected(newSelected);
    },
    [selected]
  );

  const add = useCallback(
    (item) => {
      setSelected([...selected, item]);
    },
    [selected]
  );

  useEffect(() => {
    function handleCloseDropdown(event) {
      if (!dropdownRef.current?.contains(event.target) && drop) {
        setDrop(false);
      }
    }
    window.addEventListener("mousedown", handleCloseDropdown);
    return () => window.removeEventListener("mousedown", handleCloseDropdown);
  }, [drop]);

  return (
    <div
      className="Dropdown"
      ref={dropdownRef}
      onClick={() => {
        if (!drop) setDrop(true);
      }}
    >
      <div className="SelectedContainer">
        {selected.map((item, i) => {
          return <Selected key={i} item={item} remove={remove} />;
        })}
      </div>
      {drop ? (
        <div
          className="Arrow Up"
          onClick={() => {
            setDrop(false);
          }}
        />
      ) : (
        <div className="Arrow Down" />
      )}
      {drop ? <List selected={selected} fruits={fruits} add={add} /> : <div />}
    </div>
  );
}

export default Dropdown;
