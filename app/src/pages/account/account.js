import { useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import { useRouter } from "next/router";
import { BasicLayout } from "@/layouts";
import { useAuth } from "@/hooks";
import { Info,Settings } from "@/components/Account";
import styles from "./account.module.scss";
import {Separator} from "@/components/shared";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => <Tab.Pane attached={false}>pedidos</Tab.Pane>,
    },
    {
      menuItem: "Lista de deseos",
      render: () => <Tab.Pane attached={false}>lista de deseos</Tab.Pane>,
    },
    {
      menuItem: "Direcciones",
      render: () => <Tab.Pane attached={false}>Direcciones</Tab.Pane>,
    },
    {
      menuItem: { key: 20, icon: "settings", content: "Ajustes" },
      render: () => (
      <Tab.Pane attached={false} key={99}>
        <Settings.ChangeNameForm/>
        <Separator height={80}/>
      </Tab.Pane>),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];

  return (
    <>
      <BasicLayout isContainer relative>
        <Info />

        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}