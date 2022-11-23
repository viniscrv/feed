import React from "react";
import styles from "./Avatar.module.css";


interface AvatarProps {
  hasBorder?: boolean;
  src: string;
}

const Avatar = ({ src, hasBorder = true }: AvatarProps) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};

export default Avatar;
