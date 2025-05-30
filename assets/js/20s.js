<script>
  // STEP 1: Load song data
  fetch("../searchsongs.json") // Change this path to your actual JSON file
    .then(res => res.json())
    .then(data => {
      autoDetectTelugu2000s(data); // Call function here with loaded data
    });

  // STEP 2: Function to filter only first 5 Telugu 2000s songs
  function autoDetectTelugu2000s(songs) {
    const container = document.getElementById("telugu20s"); // Make sure you have <div id="telugu20s"></div>
    let count = 0;

    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];

      // ✅ Change language or year detection here
      if (song.language === "Telugu" && song.year >= 2000 && song.year <= 2009) {
        const card = `
          <div class="song-card">
            <img src="${song.cover}" alt="${song.title}" />
            <h3>${song.title}</h3>
            <p>${song.movie || ""}</p>
            <a href="${song.link}">View Lyrics</a>
          </div>`;
        container.innerHTML += card;
        count++;

        // ✅ Display only 5 songs
        if (count === 5) break;
      }
    }

    if (count === 0) {
      container.innerHTML = "<p>No Telugu 2000s songs found.</p>";
    }
  }
</script>
