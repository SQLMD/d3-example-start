const getTimes = async (filePath, minValue) => {
  //Width and height
  const width = 1200;
  const height = 500;

  //For converting Dates to strings
  const formatTime = d3.timeFormat("%m/%d/%y");

  const importedYourPosts = await d3.json(filePath);

  const statusUpdateDates = importedYourPosts.status_updates
    .sort((post1, post2) => post1.timestamp - post2.timestamp)
    .map(post => new Date(post.timestamp * 1000))
    .map(postTimeStamp => formatTime(postTimeStamp));

  const postDates = countBy(statusUpdateDates).filter(
    postDate => postDate.value > minValue
  );

  console.log(postDates);

  const barWidth = width / postDates.length;

  //create scale

  //create svg canvas

  //draw rectangles

  //add labels
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
