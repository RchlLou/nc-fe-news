import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-app-feb2022.herokuapp.com/api/",
});

export function fetchArticles(topic) {
  return ncNewsApi
    .get("articles", { params: { topic: "football" } })
    .then(({ data: { articles } }) => {
      return articles;
    });
}
//
// export const fetchTopicBySlug = (topicSlug) => {
//   return ncNewsApi
//     .get(`articles?topic=${topicSlug}`)
//     .then(({ data: { articles } }) => {
//       return articles;
//     });
// };

export function fetchTopics() {
  return ncNewsApi.get("topics").then(({ data: { topics } }) => {
    return topics;
  });
}

export const fetchArticleByID = (id) => {
  return ncNewsApi.get(`articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};
