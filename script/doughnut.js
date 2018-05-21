const getIPs = async (filePath, minValue) => {
  const width = 300;
  const height = 300;
  try {
    const d = await d3.json(filePath);
    const array = d.account_activity.map(item => item.ip_address);
    const ips = countBy(array)
      .filter(ip => ip.value > minValue)
      .sort((ip1, ip2) => ip2.value - ip1.value);
    const dataset = ips.map(ip => ip.value);

    const outerRadius = width / 2;
    const innerRadius = width / 3;

    const pie = d3.pie();

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    console.log(dataset);
    console.log(pie(dataset));

    //Easy colors accessible via a 10-step ordinal scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    //Create SVG element

    //Set up groups

    //Draw arc paths

    //Labels

    //Key
    d3
      .select("pieL")
      .selectAll("div")
      .data(ips)
      .enter()
      .append("div")
      .text(d => d.id + ": " + d.value)
      .attr("style", "font-size:30px");
  } catch (err) {
    console.log(err);
  }
};

function countBy(items) {
  let counts = [];
  for (let item of items) {
    let id = item;
    let known = counts.findIndex(c => c.id == id);
    if (known == -1) {
      counts.push({ id, value: 1 });
    } else {
      counts[known].value++;
    }
  }
  return counts;
}
