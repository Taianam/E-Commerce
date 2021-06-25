import React from 'react'

function Carrinho(props) {
  const { total } = props;
  const badge = {
    display: "inline-block",
    padding: ".25em .4em",
    fontSize: "75%",
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25rem",
    backgroundColor: "#3A5CA5",
    color: "white"
  };

  return (
    <div>
      <h2>
        🛒 <span style={badge}>{total || "0"}</span>
      </h2>
    </div>
  );
}

export default Carrinho;
