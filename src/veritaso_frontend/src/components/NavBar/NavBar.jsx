import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleClickCrear = () => {
    navigate(`/crearArticulo`);
  };

  return (
    <nav>
      <button>Log In</button>
      <button onClick={handleClickCrear}>Crear Articulo</button>
    </nav>
  );
}
export default NavBar;
