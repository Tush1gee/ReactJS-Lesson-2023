import ProductFunc from "./Product";

function generateVoteCount() {
  return Math.floor((Math.random() * 50) + 15);
}


const products = [
  {
    id: 55,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
    stars: 1
  },
  {
    id: 44,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/kristy.png',
    productImageUrl: 'images/products/image-rose.png',
    stars: 2
  },
  {
    id: 42,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/veronika.jpg',
    productImageUrl: 'images/products/image-steel.png',
    stars: 5
  },
  {
    id: 23,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/molly.png',
    productImageUrl: 'images/products/image-yellow.png',
    stars: 5
  },
];

export default products
