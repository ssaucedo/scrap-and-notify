import puppeteer from 'puppeteer';

export const getInfo = async (): Promise<boolean> => {
  const url = 'https://www.google.com';

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.goto(url);

  await page.evaluate(async () => {
    // document.querySelector do something
  });

  return true;
};
