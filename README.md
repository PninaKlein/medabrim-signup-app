# Medabrim FM sign-up

Offline sign-up app for the Medabrim FM podcast room at Midburn. Guests leave their names and emails on an iPad, the crew adds the recording number, and after the burn the crew sends each group its recording.

## Set up the iPad (do this with internet, before the burn)

1. Open https://pninaklein.github.io/medabrim-signup-app/ in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Open the app from the new Home Screen icon and use only that icon from now on. The Home Screen app keeps its own data, separate from Safari.
4. Turn on Airplane mode and open the app once more to check that it loads offline.
5. Optional: turn on **Guided Access** (Settings > Accessibility > Guided Access) so guests can't leave the app. Triple-click the side or Home button to start and stop it.

## Using it

- **Use the iPad upright.** Sideways, the app asks you to turn it. The app has its own keyboard (Hebrew, English and email shortcuts), so the iPad keyboard never opens.
- **Guests:** fill in name and email for each person (and an optional podcast name), tap Continue, and check the emails.
- **Crew:** right after the guests confirm, the app asks for the recording number. Type it and tap Save, or tap "Add it later" and fill it in from the crew list. The crew list is behind **Crew** at the top, PIN `1234` by default (change it in Settings).
- **Backups:** tap **Back up now** at least every evening. It saves a `.json` and `.csv` file to Files or AirDrops them to a phone. The app reminds you after 10 unbacked changes.
- **After the burn:** on a laptop, open the same link, go to Crew > Settings > **Send recordings**, load the `.json` backups, add a share link for each recording, and send.

## Updating the app

Change the files, then bump `VERSION` in `sw.js` so the iPad picks up the new version the next time it opens with internet.
