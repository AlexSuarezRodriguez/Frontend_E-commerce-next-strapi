import { useState } from "react";
import { Button } from "semantic-ui-react";
import { BasicModal } from "@/components/shared";
import { AddressForm } from "../AddressForm";
import styles from "./AddAddress.module.scss";

export function AddAddress({ onReload }) {

  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow(!show);

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>

      <BasicModal show={show} onClose={onOpenClose} title="Nueva dirección">
        <AddressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </>
  );
}