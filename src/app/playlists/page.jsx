// app/playlists/page.jsx

import { playlists } from "./data";
import styles from "./PlaylistsPage.module.css"; // Importa o CSS Module

export default function PlaylistsPage() {
  return (
    <div className={styles.playlistsPage}>
      <h1>Playlists</h1>

      <div className={styles.playlistList}>
        {playlists.map((playlist) => (
          <div key={playlist.id} className={styles.playlistCard}>
            <img src={playlist.cover} alt={`${playlist.title} cover`} />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
