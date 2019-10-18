const puppeteer = require('puppeteer');
//devtools: true,
(async () => {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/google-chrome'});
  const page = await browser.newPage();
  await page.goto('http://182.76.108.4/verify/recLatest.asp',{waitUntil: 'networkidle0'});
  await page.type('input[name="txtHTNo"]','17121a0519');
  const mypage = await page.content();
  // const ele = await page.evaluate(() => {
  // 	return document.getElementsByTagName('table');
  // });
  //myele = ele[1]; 
  //console.log(Object.getOwnPropertyNames(myele));
  console.log(mypage);
  await browser.close();
})();