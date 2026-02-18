function Header(props) {
  return (
    <header>
      <h2>{props.name}</h2>
      <p>{props.position}</p>
    </header>
  );
}

export default Header;
