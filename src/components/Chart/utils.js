
import { csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";


 
function parseData(parse) {
	return function(d) {
		d.date = parse(d.Date);
		d.open = +d.Open;
		d.high = +d.High;
		d.low = +d.Low;
		d.close = +d.Close;
		d.volume = +d.Volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData(stock) {
	
	const promiseMSFT = fetch(`https://safe-tundra-92322.herokuapp.com/history/${stock}`)
	.then(response =>response.text())
	.then(data => csvParse(data, parseData(parseDate)))
	return promiseMSFT;
}
