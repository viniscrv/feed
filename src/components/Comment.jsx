import { ThumbsUp, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import styles from "./Comment.module.css"

const Comment = ({content, onDeleteComment}) => {


  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1;
    })
  }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/viniscrv.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vinícius Carvalho</strong>
                        <time title="20 de novembro às 17:36h" dateTime="2022-11-20 17:36:00">Cerca de 2h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

export default Comment