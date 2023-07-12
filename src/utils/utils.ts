export const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 100000 + 1);
};

export const randomAvatarUrlGenerator = () => {
  return `https://robohash.org/${randomNumberGenerator()}/?size=200x280`;
};
