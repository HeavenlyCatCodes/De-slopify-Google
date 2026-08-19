const ext = typeof browser !== "undefined" ? browser : chrome;

const toggle = document.getElementById("toggle");
const searchToggle = document.getElementById("searchToggle");
const workspaceToggle = document.getElementById("workspaceToggle");
const youtubeToggle = document.getElementById("youtubeToggle");
const stamp = document.getElementById("statusCard");
const stampLabel = document.getElementById("stampLabel");
const stampCopy = document.getElementById("stampCopy");
const toggleText = document.getElementById("toggleText");

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
  stampLabel.textContent = on ? "Slop off" : "Slop allowed";
  stampCopy.textContent = on
    ? "Gemini buttons and AI Overviews stay stripped on Google Search and Workspace."
    : "Google can show Gemini and AI Overviews again.";
  toggleText.textContent = on ? "On" : "Off";
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
