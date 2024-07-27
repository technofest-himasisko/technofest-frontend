import style from "./loading.module.css";

export default function Loading() {
  return (
    <svg className={style.container} viewBox="0 0 35 35" height="35" width="35">
      <rect
        className={style.track}
        x="2.5"
        y="2.5"
        fill="none"
        stroke-width="5px"
        width="32.5"
        height="32.5"
      />
      <rect
        className={style.car}
        x="2.5"
        y="2.5"
        fill="none"
        stroke-width="5px"
        width="32.5"
        height="32.5"
        pathLength="100"
      />
    </svg>
  );
}
