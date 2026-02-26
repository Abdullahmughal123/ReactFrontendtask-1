function ItemList() {
  const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Mouse" }
  ];

  return (
    <div className="list-container">
      <h2>Product List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;