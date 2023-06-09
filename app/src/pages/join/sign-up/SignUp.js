import React from "react";
import styles from "./SignUp.module.scss";
import {JoinLayout} from "@/layouts";


const SignUp = () => {
  return (
    <>
      <JoinLayout>
        <div>
          <h3 className={styles.SignUp}>Crear cuenta</h3>
        </div>
      </JoinLayout>
    </>
  );
};

export default SignUp;
