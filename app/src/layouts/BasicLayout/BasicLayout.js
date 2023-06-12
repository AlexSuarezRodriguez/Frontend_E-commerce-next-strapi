import React from "react";
import styles from "./BasicLayout.module.scss";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import { TopBar, Footer } from "@/components/layout";

export function BasicLayout({
  children,
  isOpenSearch = false,
  isContainer = false,
  relative = false,
}) {
  return (
    <>
      <TopBar isOpenSearch={isOpenSearch} />
      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>

      <Footer />
    </>
  );
}
