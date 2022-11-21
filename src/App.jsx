import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://i.pinimg.com/564x/ce/88/d7/ce88d760477abaf73c1b241f14a4aa48.jpg",
      name: "Vinícius Carvalho",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum 👋" },

      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumquenostrum, illo mollitia magni libero repellat maiores aliquam ut commodi velit suscipit qui rerum dolorum, reiciendis fuga nam amet expedita officia? 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-21 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://i.pinimg.com/564x/76/c6/20/76c620c6906cee1903c191f255fc79e1.jpg",
      name: "suicíniV",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum 👋" },

      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumquenostrum, illo mollitia magni libero repellat maiores aliquam ut commodi velit suscipit qui rerum dolorum, reiciendis fuga nam amet expedita officia? 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-16 15:30:00"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}              
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
