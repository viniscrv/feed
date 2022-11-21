import { ThumbsUp, Trash } from 'phosphor-react'
import React from 'react'
import styles from "./Comment.module.css"

const Comment = () => {
  return (
    <div className={styles.comment}>
        <img src="https://github.com/viniscrv.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vinícius Carvalho</strong>
                        <time title="20 de novembro às 17:36h" dateTime="2022-11-20 17:36:00">Cerca de 2h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

export default Comment