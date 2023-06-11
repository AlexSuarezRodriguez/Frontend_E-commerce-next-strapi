import React from "react";
import { Button } from "semantic-ui-react";
import { useAuth } from "@/hooks";

const index = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>shop</h2>
      <Button primary>Primary</Button>

      {user ? (
        <div>
          <p>
            Hola {user.firstname} {user.lastname}
          </p>
          <Button onClick={logout}>Cerrar sesion</Button>
        </div>
      ) : (
        <div>
          <a href="/join/sign-in">Iniciar sesion</a>
        </div>
      )}
    </div>
  );
};

export default index;
