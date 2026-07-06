(function () {
  "use strict";

  var match = window.location.pathname.match(/^\/(20\d{2})\/day\/(\d{1,2})\/?$/);
  if (!match) {
    return;
  }

  var year = match[1];
  var day = Number.parseInt(match[2], 10);
  var previous = day - 1;
  var next = day + 1;
  var title = document.querySelector("article h2");

  if (!title) {
    return;
  }

  var puzzleTitle = title.textContent;

  if (previous > 0) {
    puzzleTitle = puzzleTitle.substring(3);
  }

  if (next <= 25) {
    puzzleTitle = puzzleTitle.substring(0, puzzleTitle.length - 3);
  }

  title.textContent = puzzleTitle;

  if (previous > 0) {
    title.prepend(dayLink(year, previous, "[--]"));
  }

  if (next <= 25) {
    title.append(dayLink(year, next, "[++]"));
  }

  function dayLink(year, day, text) {
    var link = document.createElement("a");
    link.textContent = text;
    link.href = "/" + year + "/day/" + day.toString();
    return link;
  }
})();
