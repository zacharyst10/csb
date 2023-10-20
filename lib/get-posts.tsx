const getPosts = () => {
  const posts = [];

  for (let i = 0; i < 10; i++) {
    const title = `Post ${i + 1}`;
    const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, ipsum velit bibendum ipsum, vel bibendum velit elit vel bibendum bibendum.`;
    posts.push({ title, content });
  }

  return posts;
};

export default getPosts;
