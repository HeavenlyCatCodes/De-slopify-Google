const ext = typeof browser !== "undefined" ? browser : chrome;

const toggle = document.getElementById("toggle");
const searchToggle = document.getElementById("searchToggle");
const workspaceToggle = document.getElementById("workspaceToggle");
const youtubeToggle = document.getElementById("youtubeToggle");
const stamp = document.getElementById("statusCard");
const stampLabel = document.getElementById("stampLabel");
const stampCopy = document.getElementById("stampCopy");
const toggleText = document.getElementById("toggleText");
const badgeText = document.getElementById("badgeText");
const searchState = document.getElementById("searchState");
const workspaceState = document.getElementById("workspaceState");
const youtubeState = document.getElementById("youtubeState");

function storageGet(defaults) {
  return new Promise((resolve) => {
    if (typeof browser !== "undefined" && browser.storage) {
      browser.storage.local.get(defaults).then(resolve, () => resolve(defaults));
      return;
    }
    ext.storage.local.get(defaults, (result) => resolve(result || defaults));
  });
}

function storageSet(value) {
  return new Promise((resolve) => {
    if (typeof browser !== "undefined" && browser.storage) {
      browser.storage.local.set(value).then(resolve, resolve);
      return;
    }
    ext.storage.local.set(value, resolve);
  });
}

function render(on, searchOn, workspaceOn, youtubeOn) {
  toggle.checked = on;
  searchToggle.checked = searchOn;
  workspaceToggle.checked = workspaceOn;
  youtubeToggle.checked = youtubeOn;
  stamp.classList.toggle("is-off", !on);
  badgeText.textContent = on ? "ON" : "OFF";
  stampLabel.textContent = on ? "Hiding Gemini" : "Not hiding";
  stampCopy.textContent = on
    ? "AI Overviews, Ask Gemini, and Help me write stay stripped."
    : "Google can show Gemini and AI Overviews again.";
  toggleText.textContent = on ? "Turn off" : "Turn on";
  searchState.textContent = searchOn ? "On" : "Off";
  workspaceState.textContent = workspaceOn ? "On" : "Off";
  youtubeState.textContent = youtubeOn ? "On" : "Off";
  searchState.classList.toggle("is-off", !searchOn);
  workspaceState.classList.toggle("is-off", !workspaceOn);
  youtubeState.classList.toggle("is-off", !youtubeOn);
}

const defaults = {
  enabled: true,
  hideSearch: true,
  hideWorkspace: true,
  hideYoutube: true,
};

storageGet(defaults).then((result) => {
  render(
    result.enabled !== false,
    result.hideSearch !== false,
    result.hideWorkspace !== false,
    result.hideYoutube !== false
  );
});

toggle.addEventListener("change", async () => {
  render(toggle.checked, searchToggle.checked, workspaceToggle.checked, youtubeToggle.checked);
  await storageSet({ enabled: toggle.checked });
});

searchToggle.addEventListener("change", async () => {
  render(toggle.checked, searchToggle.checked, workspaceToggle.checked, youtubeToggle.checked);
  await storageSet({ hideSearch: searchToggle.checked });
});

workspaceToggle.addEventListener("change", async () => {
  render(toggle.checked, searchToggle.checked, workspaceToggle.checked, youtubeToggle.checked);
  await storageSet({ hideWorkspace: workspaceToggle.checked });
});

youtubeToggle.addEventListener("change", async () => {
  render(toggle.checked, searchToggle.checked, workspaceToggle.checked, youtubeToggle.checked);
  await storageSet({ hideYoutube: youtubeToggle.checked });
});
