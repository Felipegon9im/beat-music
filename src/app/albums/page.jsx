// app/albums/page.jsx

import { albums } from "./data";
import styles from "./AlbumsPage.module.css"; // Importa o CSS Module

export default function AlbumsPage() {
  return (
    <div className={styles.albumsPage}>
      <h1>Albums</h1>

      <div className={styles.albumList}>
        {albums.map((album) => (
          <div key={album.id} className={styles.albumCard}>
            <img src={album.cover} alt={`${album.title} cover`} />
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
