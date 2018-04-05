import axios from 'axios';

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



const getCoinDesk = () => {
  console.log('fetching data');
	return axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
	.then((res) => {
    console.log('received', res.data);
    return transform(res.data, 'BTC', res.data.time.updated)
  });
};

export default getCoinDesk;