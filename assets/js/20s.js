
  // STEP 1: Load song data
  fetch("../songs/yourfile.json") // Change this path to your actual JSON file
    .then(res => res.json())
    .then(data => {
      autoDetectTelugu2020s(data); // Call function here with loaded data
    });

  // STEP 2: Function to filter Telugu 2020s songs
  function autoDetectTelugu2020s(songs) {
    const container = document.getElementById("telugu20s"); // Add <div id="telugu20s"></div> in HTML
    let count = 0;

    songs.forEach(song => {
      // ✅ Change language or year detection here
      if (song.language === "Telugu" && song.year >= 2020 && song.year <= 2029) {
        const card = `
          <div class="song-card">
            <img src="${song.cover}" alt="${song.title}" />
            <h3>${song.title}</h3>
            <p>${song.movie || ""}</p>
            <a href="${song.link}">View Lyrics</a>
          </div>`;
        container.innerHTML += card;
        count++;
      }
    });

    if (count === 0) {
      container.innerHTML = "<p>No Telugu 2020s songs found.</p>";
    }
  }
