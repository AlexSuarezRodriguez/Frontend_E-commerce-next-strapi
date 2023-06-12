import { useState, useEffect } from "react";
import styles from "./Menu.module.scss";
import { Image, Icon, Input } from "semantic-ui-react";
import { platform } from "@/api";

const platformCtrl = new platform();

export function Menu({ isOpenSearch }) {
  const [platforms, setPlatforms] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const {data} = await platformCtrl.getAll();
        setPlatforms(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <div>C Menu</div>;
}
