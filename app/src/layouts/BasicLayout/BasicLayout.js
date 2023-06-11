import React from "react";
import styles from "./BasicLayout.module.scss";
import { Container } from "semantic-ui-react";
import classNames from "classnames";

export function BasicLayout({
  children,
  isOpenSearch,
  isContainer = false,
  relative = false,
}) {
  return (
    <>
      <Container fluid>
        <div className={classNames({[styles.relative]:relative})}>
        {isContainer ? <Container>{children}</Container> : children}</div>
      </Container>
    </>
  );
}
