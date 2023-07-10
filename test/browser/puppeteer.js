const puppeteer = require('puppeteer');
const ora = require('ora');

const prefix = '[browser]';

const spinner = ora(`${prefix} start browser test...`).start();

(async () => {
  const testPath = `file://${__dirname}/index.html`;
  console.log(testPath);

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(testPath);

  await page.waitFor('.suite');

  // pass
  const passNode = await page.$$('.pass');

  // fail
  const failNode = await page.$$('.fail');

  spinner.stop();

  const pngPath = `${__dirname}/browser.png`;
  await page.screenshot({ path: pngPath, fullPage: true });

  if (passNode && passNode.length) {
    console.log(prefix, `通过 ${passNode.length} 项`.green);
  }

  if (failNode && failNode.length) {
    console.log(
      prefix,
      `失败 ${failNode.length} 项`.red,
      '具体见:',
      `${pngPath}`.underline
    );
    await browser.close();
    process.exit(1);
  }

  await browser.close();
  console.log(prefix, `🎉 用例全部通过浏览器测试 🎉`.green);
})();
