import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/viniscrv.png"
          />
          <div className={styles.authorInfo}>
            <strong>Vinícius Carvalho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="20 de novembro às 17:36h" dateTime="2022-11-20 17:36:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum 👋</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum, illo mollitia magni libero repellat maiores aliquam ut commodi velit suscipit qui rerum dolorum, reiciendis fuga nam amet expedita officia? 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a>{" "}
          <a href="#"> #nlw </a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
};

export default Post;