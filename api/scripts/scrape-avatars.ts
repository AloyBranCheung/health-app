// https://www.flaticon.com/stickers-pack/avatars-132
const p = require("puppeteer");
const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
const ax = require("axios");

async function scrape() {
  // Launch the browser and open a new blank page
  const browser = await p.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://www.flaticon.com/stickers-pack/avatars-132", {
    waitUntil: "load",
  });
  await page.setViewport({ width: 1920, height: 1080 });

  await scrollPageToBottom(page, {
    size: 500,
    delay: 250,
  });

  const urls = await page.evaluate(() => {
    const avatarsArr = document.querySelectorAll(".icons.big img");
    const urlsArr = [];
    for (const imgTag of avatarsArr) {
      const src = imgTag.getAttribute("src");
      if (src && src.length > 0) {
        urlsArr.push(src);
      }
    }
    return urlsArr;
  });

  for await (const url of urls) {
    await ax.post("http://localhost:3001/api/profilepics", { url });
  }

  await browser.close();
  return;
}

scrape();
