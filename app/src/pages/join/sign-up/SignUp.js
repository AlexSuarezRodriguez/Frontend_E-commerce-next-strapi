import React from "react";
import styles from "./SignUp.module.scss";
import { JoinLayout } from "@/layouts";
import Link from "next/link";
import { RegisterForm } from "@/components/auth"
const SignUp = () => {
  return (
    <>
      <JoinLayout>
        <div className={styles.signUp}>
          <h3 >Crear cuenta</h3>
          <RegisterForm/>
          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
};

export default SignUp;
