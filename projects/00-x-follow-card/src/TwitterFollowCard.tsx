import { useState } from "react";

export function TwitterFollowCard({
  children,
  formatUserName,
  userName = "unknown",
  initialIsFollowing = false,
}: {
  formatUserName: (userName: string) => string;
  userName: string;
  initialIsFollowing: boolean;
  children: React.ReactNode;
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const btnText = isFollowing ? "Seguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-info-userName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={btnClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{btnText}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
