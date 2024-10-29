// app/artists/page.jsx

import { artists } from "./data";
import styles from "./ArtistsPage.module.css"; // Importa o CSS Module

export default function ArtistsPage() {
  return (
    <div className={styles.artistsPage}>
      <h1>Artists</h1>

      <div className={styles.artistList}>
        {artists.map((artist) => (
          <div key={artist.id} className={styles.artistCard}>
            <img src={artist.profilePicture} alt={`${artist.name} profile`} />
            <h3>{artist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
