var casual = require('casual');

// index.js
module.exports = () => {
  const data = { posts: [] }
  // Create 25 posts
  for (let i = 0; i < 1000; i++) {
    data.posts.push({ id: i, title: casual.title, content: casual.sentences(n=50), author:casual.name })
  }
  return data
}
