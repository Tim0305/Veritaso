import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #2115b8;
    box-shadow: 0 0 5px rgba(33, 21, 184, 0.5);
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: #666;
  }

  &:hover svg {
    color: #2115b8;
  }
`;

const LoginButton = styled.button`
  background-color: #2115b8;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #1510a0;
  }
`;

function Navbar() {
  const [search, setSearch] = useState("");
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleEnviar = () => {
    navigate(`/resultados?busqueda=${encodeURIComponent(search)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buttonRef.current.click();
    }
  };

  return (
    <NavbarContainer>
      <div></div> {/* Espacio vacío para centrar el input */}
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={handleChangeSearch}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon onClick={handleEnviar} ref={buttonRef}>
          <CiSearch />
        </SearchIcon>
      </SearchContainer>
      <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
    </NavbarContainer>
  );
}

export default Navbar;
