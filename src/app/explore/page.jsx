// app/explore/page.jsx

import { suggestedAlbums, popularArtists, trendingSongs } from "./data";
import styles from "./ExplorePage.module.css"; // Import do CSS Module

export default function ExplorePage() {
  return (
    <div className={styles.explorePage}>
      <h1>Explore</h1>

      <section>
        <h2>Suggested Albums</h2>
        <div className={styles.albumList}>
          {suggestedAlbums.map((album) => (
            <div key={album.id} className={styles.albumCard}>
              <img src={album.cover} alt={`${album.title} cover`} />
              <h3>{album.title}</h3>
              <p>{album.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Popular Artists</h2>
        <div className={styles.artistList}>
          {popularArtists.map((artist) => (
            <div key={artist.id} className={styles.artistCard}>
              <img src={artist.profilePicture} alt={`${artist.name} profile`} />
              <h3>{artist.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Trending Songs</h2>
        <ul className={styles.songList}>
          {trendingSongs.map((song) => (
            <li key={song.id}>
              <span>{song.title}</span> - <span>{song.artist}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
