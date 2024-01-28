import React from "react";
import styles from "./InititialPage.module.css";

const InitialPage = ({
  id,
  title,
  info,
  imgLeft,
  imgRight,
  background,

  primaryColor,
  secondaryColor,
  lineColor,
  totalTools,
}) => {
  return (
    <div
      className={[styles.wrapper, id % 2 === 0 && styles.evenWrapper].join(" ")}
      style={{
        "--background": background,
        "--primaryColor": primaryColor,
        "--secondaryColor": secondaryColor,
        "--lineColor": lineColor,
      }}
    >
      <p className={styles.topLine}></p>

      <div className={styles.container}>
        {title && (
          <h2 className={styles.title}>
            <span className={styles.totalTools}>{totalTools} </span> {title}
          </h2>
        )}
        <p
          className={styles.info}
          dangerouslySetInnerHTML={{ __html: info }}
        ></p>

        <div className={styles.imgContainer}>
          <p className={styles.bottomLine}></p>
          <img src={imgLeft} alt="#" className={styles.imgLeft} />
          <img src={imgRight} alt="#" className={styles.imgRight} />
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
