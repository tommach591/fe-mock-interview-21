import "./Selected.css";

function Selected({ item, remove }) {
  return (
    <div className="Selected">
      <img
        className="Remove"
        src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png"
        alt=""
        onClick={() => {
          remove(item);
        }}
      />
      <h1>{item}</h1>
    </div>
  );
}

export default Selected;
