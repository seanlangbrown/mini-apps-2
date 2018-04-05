let sampleData = {
	bpi: {
		'2013-09-01': 128.2597,
		'2013-09-02': 127.3648,
		'2013-09-03': 127.5915,
		'2013-09-04': 120.5738,
		'2013-09-05': 120.5333
	},
	disclaimer: "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
	time: {
	updated: "Sep 6, 2013 00:03:00 UTC",
	updatedISO: "2013-09-06T00:03:00+00:00"
	}
};

const transform = (data, label, updated) => {
  let tdata = {data: [], label: label, updated: updated};
  for (var key in data.bpi) {
    tdata.data.push({
      x: key,
      y: data.bpi[key]
    });
  }

  return tdata;
}

export default () => (transform(sampleData, 'BPI', sampleData.time.updated));