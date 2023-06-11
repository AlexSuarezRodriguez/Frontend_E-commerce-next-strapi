import React from "react";
import styles from "./SignIn.module.scss";
import { JoinLayout } from "@/layouts";
import Link from "next/link";
import { LoginForm } from "@/components/auth";

const SignIn = () => {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar sesion</h3>

          <LoginForm/>
          <div className={styles.actions}>
            <Link href="/join/sign-up">¿Aun no tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
};

export default SignIn;
