import React from "react";
import styles from "./MainComponent.module.css";
import Pattern from "../../images/Pattern";
const MainComponent = ({
  id,
  title,

  info,

  img,
  link,

  background,
  patternColor,
  primaryColor,
  secondaryColor,
  linkColor,
}) => {
  return (
    <div
      className={[styles.wrapper, id % 2 === 0 && styles.evenWrapper].join(" ")}
      style={{
        "--background": background,
        "--patternColor": patternColor,
        "--primaryColor": primaryColor,
        "--secondaryColor": secondaryColor,
      }}
    >
      <p className={styles.line}></p>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <p className={styles.info}>{info}</p>

          <div className={styles.imgAndLink}>
            <img src={img} alt="#" className={styles.img} />
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
              style={{ color: linkColor && linkColor }}
            >
              {link}
            </a>
          </div>
        </div>
        <div className={styles.pattern}>
          <Pattern color={patternColor ? patternColor : primaryColor} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
