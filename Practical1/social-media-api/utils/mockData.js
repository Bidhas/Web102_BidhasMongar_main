const users = [
  {
    id: 1,
    username: "kaizen",
    email: "kaizen@example.com"
  },
  {
    id: 2,
    username: "mischief",
    email: "mischief@example.com"
  },
  {
    id: 3,
    username: "ammo",
    email: "ammo@example.com"
  }
];

const posts = [
  {
    id: 1,
    userId: 1,
    content: "Building my first API 🚀",
    likes: 12
  },
  {
    id: 2,
    userId: 2,
    content: "Learning backend is fun 😎",
    likes: 7
  }
];

const comments = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    text: "Nice work!"
  },
  {
    id: 2,
    postId: 2,
    userId: 3,
    text: "Keep going 🔥"
  }
];

module.exports = {
  users,
  posts,
  comments
};
