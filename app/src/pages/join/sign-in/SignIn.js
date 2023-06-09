import React from "react";
import styles from "./SignIn.module.scss";
import { JoinLayout } from "@/layouts";

const SignIn = () => {
  return (
    <>
      <JoinLayout>
        <div>
          <h3 className={styles.signIn}>Iniciar sesion</h3>
        </div>
      </JoinLayout>
    </>
  );
};

export default SignIn;
