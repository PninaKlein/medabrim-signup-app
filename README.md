# Medabrim FM sign-up

Offline sign-up app for the Medabrim FM podcast room at Midburn. Guests leave their names and emails on an iPad, the crew adds the recording number, and after the burn the crew sends each group its recording.

## Set up the iPad (do this with internet, before the burn)

1. Open the GitHub Pages link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Open the app from the new Home Screen icon and use only that icon from now on. The Home Screen app keeps its own data, separate from Safari.
4. Turn on Wi-Fi off / Airplane mode and open the app once more to check it loads offline.
5. Optional: turn on **Guided Access** (Settings > Accessibility > Guided Access) so guests can't leave the app. Triple-click the side or Home button to start and stop it.

## Using it

- **Guests:** fill in name and email for each person (and an optional podcast name), confirm, and tell the crew their session code (A1, A2 … the letter changes each day).
- **Crew:** tap **Crew** at the bottom, PIN `1234` by default (change it in Settings). Type each recording number next to its session.
- **Backups:** tap **Back up now** at least every evening. It saves a `.json` and `.csv` file to Files or AirDrops them to a phone. The app reminds you after 10 unbacked changes.
- **After the burn:** on a laptop, open the same link, go to Crew > Settings > **Send recordings**, load the `.json` backups, add a share link for each recording, and send.

## Updating the app

Change the files, then bump `VERSION` in `sw.js` so the iPad picks up the new version the next time it opens with internet.
