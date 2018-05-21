const getTimes = async (filePath, minValue) => {
  //Width and height
  const w = 1200;
  const h = 500;

  //For converting Dates to strings
  const formatTime = d3.timeFormat("%m/%d/%y");

  //get data from facebook file for your_posts.json
  const d = await d3.json(filePath);

  const array = d.status_updates
    .sort((act1, act2) => act1.timestamp - act2.timestamp)
    .map(act => new Date(act.timestamp * 1000))
    .map(ts => formatTime(ts));

  const dates = countBy(array).filter(act => act.value > minValue);

  //Create Scale

  //crate svg canvas

  // add rectangles first without scale

  //add date labels
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
