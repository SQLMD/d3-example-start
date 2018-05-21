const showTopics = async filePath => {
  const importedTopicFile = await d3.json(filePath);

  const topics = importedTopicFile.topics;

  d3.select("main");
};
