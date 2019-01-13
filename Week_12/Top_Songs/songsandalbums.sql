-- SELECT * FROM Top5000;

-- SELECT * FROM topAlbums;

-- SELECT top5000.artist, top5000.released, top5000.song_title
-- FROM top5000
-- INNER JOIN topAlbums ON top5000.released = topAlbums.released AND top5000.artist = topAlbums.artist;

SELECT
	topAlbums.released,
    topAlbums.album,
    topAlbums.id AS album_position,
    top5000.id AS song_position,
    top5000.song_title,
    top5000.artist
FROM
	topAlbums INNER JOIN top5000 ON (
    topAlbums.artist = top5000.artist
    AND topAlbums.released = top5000.released
    )
    
Where (topAlbums.artist = "The Beatles")
ORDER BY topAlbums.released;