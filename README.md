# https://github.com/mdwhatcott/advent-of-code-browser-navigation

This browser extension modifies [Advent of Code](http://adventofcode.com) puzzle titles by replacing leading and trailing dash padding `---` with hyperlinks to the previous day and next day puzzles to aid navigation.

The extension uses Manifest V3 for current Chromium-based browsers, including Brave and Chrome.


For example, consider this title from the [2015 event](http://adventofcode.com/2015/day/16):

	--- Day 16: Aunt Sue ---

After applying the modifications below the above title now reads:

	[--] Day 16: Aunt Sue [++]

The `[--]` and `[++]` will have become hyperlinks to the [Day 15](http://adventofcode.com/2015/day/15) and [Day 17](http://adventofcode.com/2015/day/17) puzzles, respectively. Enjoy!

![Example](https://github.com/mdwhatcott/advent-of-code-browser-navigation/blob/master/day-16-2015-screenshot.png)

Install for:

- [Chrome](https://chrome.google.com/webstore/detail/advent%20/fpgpinpnmmgakjgadibllhngdapbhlad)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/advent-/)

To build a local package for sideloading:

	make

Then load `output/extension.zip` or the unpacked repository directory from your browser's extensions page with developer mode enabled.

-----

Source Code: https://github.com/mdwhatcott/advent-of-code-browser-navigation
