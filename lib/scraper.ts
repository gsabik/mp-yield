import puppeteer from "puppeteer";

export const scrapeMercadoPago = async() => {
	const MPURL = "https://www.mercadopago.com.ar/cuenta";
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(MPURL);

	// Scrape yield
	const scrapeText = await page.evaluate(() => {
		const text = document.querySelector(".basics .cards div:first-child p")?.innerHTML;
		return text;
	});

	// Regex text scrape
	const result = scrapeText?.replace(/\D+\.?\D+/g, "");
	const parseResult = result ? parseInt(result) : NaN;
	return parseResult;
}