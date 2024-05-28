import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const formatUserName = (userName: string): string => `@${userName}`;

  //   const karlanino = {
  //     formatUserName,
  //     initialIsFollowing: true,
  //     userName: "karlanino",
  //   };

  const users = [
    {
      formatUserName,
      isFollowing: true,
      userName: "midudev",
    },
    {
      formatUserName,
      isFollowing: false,
      userName: "gianndev",
    },
    {
      formatUserName,
      isFollowing: false,
      userName: "josegregorioag",
    },
    {
      formatUserName,
      isFollowing: true,
      userName: "karlanino",
    },
  ];

  return (
    <section className="App">
      {users.map((user) => {
        return (
          <TwitterFollowCard
            key={user.userName}
            formatUserName={user.formatUserName}
            initialIsFollowing={user.isFollowing}
            userName={user.userName}
          >
            {user.userName}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
