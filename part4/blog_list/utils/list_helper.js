const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const total = blogs
    .map((blog) => {
      return blog.likes;
    })
    .reduce((x, c) => {
      return (x += c);
    });
  return total;
};

const favoriteBlog = (blogs) => {
  const max = blogs.reduce(function (prev, current) {
    return prev.likes > current.likes ? prev : current;
  });
  return max;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
