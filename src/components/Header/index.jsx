import { FiSearch } from "react-icons/fi";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

import { Container, Profile } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Header({ childToParent }) {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarDefaultProfile;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  useEffect(() => {
    async function fetchSearch() {
      childToParent(search);
    }

    fetchSearch();
  }, [search]);

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input
        placeholder="Pesquisar pelo titulo"
        type="text"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Profile>
        <div>
          <Link to="/profile">
            <span>{user.name}</span>
          </Link>

          <ButtonText title="Sair" onClick={handleSignOut} />
        </div>

        <img src={avatarUrl} alt="Imagem avatar do usúario" />
      </Profile>
    </Container>
  );
}
