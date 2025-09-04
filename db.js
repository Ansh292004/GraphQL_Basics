let games = [
  { id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
  { id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox'] },
  { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '4', title: 'Mario Kart', platform: ['Switch'] },
  { id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC'] }
];

let authors = [
  { id: '1', name: 'mario', verified: true },
  { id: '2', name: 'yoshi', verified: false },
  { id: '3', name: 'peach', verified: true }
];

let reviews = [
  { id: '1', rating: 9, content: 'niceeeeeee', author_id: '1', game_id: '2' },
  { id: '2', rating: 10, content: 'cool game', author_id: '2', game_id: '1' },
  { id: '3', rating: 7, content: 'damn', author_id: '3', game_id: '3' },
  { id: '4', rating: 5, content: 'worst experience', author_id: '2', game_id: '4' },
  { id: '5', rating: 8, content: 'cool features', author_id: '3', game_id: '5' },
  { id: '6', rating: 7, content: 'very bad', author_id: '1', game_id: '2' },
  { id: '7', rating: 10, content: 'great experience', author_id: '3', game_id: '1' }
];

//ALL EXPORTS OF THIS FILE-----------------------------------------------

export default {games,authors,reviews};