# Release Checklist

## Build

- [ ] Confirm `manifest.json` has a version greater than the currently published store version.
- [ ] Build the extension package:

  ```sh
  make
  ```

- [ ] Confirm `output/extension.zip` was created.

## Smoke Test

- [ ] Open `brave://extensions`.
- [ ] Enable Developer mode.
- [ ] Click Load unpacked.
- [ ] Select this repository directory.
- [ ] Visit an Advent of Code puzzle page, for example:

  ```text
  https://adventofcode.com/2015/day/16
  ```

- [ ] Confirm `[--]` appears on days 2 through 25 and navigates to the previous day.
- [ ] Confirm `[++]` appears on days 1 through 24 and navigates to the next day.
- [ ] Confirm day 1 has no previous-day link.
- [ ] Confirm day 25 has no next-day link.

## Chrome Web Store

- [ ] Open the Chrome Web Store Developer Dashboard.
- [ ] Open the existing `advent+-` item.
- [ ] On the Package tab, upload `output/extension.zip` with Upload New Package.
- [ ] Confirm the Store Listing metadata is still accurate.
- [ ] Confirm the Privacy fields are still accurate:
  - Single purpose: adds previous and next day navigation links to Advent of Code puzzle titles.
  - User data collection: none.
  - Permissions: no broad permissions beyond the content script match.
- [ ] Submit the update for review.
- [ ] After approval, publish immediately or manually publish if deferred publishing was selected.

## Brave

- [ ] Confirm the Chrome Web Store update is published.
- [ ] Install or update the extension in Brave from the Chrome Web Store.
- [ ] Re-run the smoke test in Brave.

## Firefox Add-ons

- [ ] Open the existing add-on page on addons.mozilla.org.
- [ ] Upload the new package as a new version of the existing add-on.
- [ ] Let AMO validation run.
- [ ] Resolve any validation errors or security/privacy warnings.
- [ ] Submit the update.
- [ ] After publication, install or update the extension in Firefox and re-run the smoke test.

## Post-release

- [ ] Create a GitHub release or tag for the manifest version.
- [ ] Confirm store listings show the expected version.
- [ ] Confirm no user-facing store warnings mention Manifest V2.
