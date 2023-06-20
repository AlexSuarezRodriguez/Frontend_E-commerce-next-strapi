import Link from "next/link";
import { map as mapLodash } from "lodash";
import { fn } from "@/utils";
import { Label } from "@/components/shared";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { games } = props;

  return (
    <div className={styles.gridGames}>
      {mapLodash(games, (game) => (
        <Link
          key={game.id}
          href={`/${game.attributes.slug}`}
          className={styles.game}
        >
          <div>
            <img
              src={game.attributes.cover.data.attributes.url}
              alt="Image Game"
            />
            {game.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.attributes.discount}%`}
              </Label.Discount>
            )}
          </div>

          <div>
            <span>{game.attributes.title}</span>
            <span className={styles.price}>
              {fn.calcDiscountedPrice(
                game.attributes.price,
                game.attributes.discount
              )}
              €
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
