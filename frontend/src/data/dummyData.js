// Dummy data for development/demo purposes

export const DUMMY_BOOKS = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    average_rating: 4.5,
    cover_url: 'https://covers.openlibrary.org/b/id/8404119-M.jpg',
    genres: ['Fiction', 'Fantasy', 'Contemporary'],
    description: 'Between life and death there is a library, and within that library the shelves go on forever...'
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    average_rating: 4.8,
    cover_url: 'https://covers.openlibrary.org/b/id/7725309-M.jpg',
    genres: ['Science Fiction', 'Epic', 'Adventure'],
    description: 'A stunning epic of politics, religion, ecology, and human emotion, Dune is a landmark of science fiction.'
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    average_rating: 4.7,
    cover_url: 'https://covers.openlibrary.org/b/id/9929296-M.jpg',
    genres: ['Science Fiction', 'Adventure', 'Humor'],
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission to save both humanity and the earth.'
  },
  {
    id: '4',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    average_rating: 4.3,
    cover_url: 'https://covers.openlibrary.org/b/id/7883783-M.jpg',
    genres: ['Mystery', 'Thriller', 'Psychological'],
    description: 'A woman shoots her husband five times in the face and then never speaks another word.'
  },
  {
    id: '5',
    title: 'Educated',
    author: 'Tara Westover',
    average_rating: 4.6,
    cover_url: 'https://covers.openlibrary.org/b/id/8050356-M.jpg',
    genres: ['Memoir', 'Non-Fiction', 'Biography'],
    description: 'A memoir about a young woman who leaves her survivalist family and pursues education.'
  },
  {
    id: '6',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    average_rating: 4.7,
    cover_url: 'https://covers.openlibrary.org/b/id/8783088-M.jpg',
    genres: ['Historical Fiction', 'Romance', 'Mystery'],
    description: 'Aging Hollywood icon Evelyn Hugo shares the secrets behind her glamorous life and scandalous career.'
  },
  {
    id: '7',
    title: 'Atomic Habits',
    author: 'James Clear',
    average_rating: 4.5,
    cover_url: 'https://covers.openlibrary.org/b/id/8422198-M.jpg',
    genres: ['Self-Help', 'Non-Fiction', 'Productivity'],
    description: 'Transform your life with small, incremental changes that compound into remarkable results.'
  },
  {
    id: '8',
    title: 'Verity',
    author: 'Colleen Hoover',
    average_rating: 4.6,
    cover_url: 'https://covers.openlibrary.org/b/id/8851285-M.jpg',
    genres: ['Thriller', 'Mystery', 'Romance'],
    description: 'A shocking manuscript and dangerous secrets threaten to unravel everything a woman knows.'
  }
];

export const DUMMY_REVIEWS = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'Sarah Chen',
      profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    book: {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover_url: 'https://covers.openlibrary.org/b/id/8404119-M.jpg'
    },
    rating: 5,
    text: 'This book beautifully explores the concept of life choices and second chances. I loved every page and finished it in two days!',
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    likes_count: 24
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'James Wilson',
      profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
    },
    book: {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      cover_url: 'https://covers.openlibrary.org/b/id/7725309-M.jpg'
    },
    rating: 5,
    text: 'An epic masterpiece! The world-building is incredible and the political intrigue keeps you hooked. Took me a while to finish but absolutely worth it.',
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    likes_count: 42
  },
  {
    id: '3',
    user: {
      id: '3',
      username: 'Emma Rodriguez',
      profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    },
    book: {
      id: '3',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover_url: 'https://covers.openlibrary.org/b/id/9929296-M.jpg'
    },
    rating: 4,
    text: 'Such a fun and engaging read! The humor balances the high-stakes plot perfectly. Would recommend to anyone who loves sci-fi with heart.',
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    likes_count: 18
  },
  {
    id: '4',
    user: {
      id: '4',
      username: 'Michael Park',
      profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    },
    book: {
      id: '4',
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      cover_url: 'https://covers.openlibrary.org/b/id/7883783-M.jpg'
    },
    rating: 4,
    text: 'A gripping psychological thriller with a twist I didn\'t see coming. Perfect for a weekend read!',
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    likes_count: 31
  },
  {
    id: '5',
    user: {
      id: '5',
      username: 'Lisa Thompson',
      profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
    },
    book: {
      id: '5',
      title: 'Educated',
      author: 'Tara Westover',
      cover_url: 'https://covers.openlibrary.org/b/id/8050356-M.jpg'
    },
    rating: 5,
    text: 'A powerful and inspiring memoir. Tara\'s journey is remarkable and her writing is beautifully honest. Changed my perspective on education.',
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    likes_count: 56
  }
];

export const DUMMY_USER_BOOKS = [
  {
    id: '1',
    status: 'read',
    book: {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover_url: 'https://covers.openlibrary.org/b/id/8404119-M.jpg',
      average_rating: 4.5
    }
  },
  {
    id: '2',
    status: 'currently_reading',
    book: {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      cover_url: 'https://covers.openlibrary.org/b/id/7725309-M.jpg',
      average_rating: 4.8
    }
  },
  {
    id: '3',
    status: 'want_to_read',
    book: {
      id: '3',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover_url: 'https://covers.openlibrary.org/b/id/9929296-M.jpg',
      average_rating: 4.7
    }
  },
  {
    id: '4',
    status: 'read',
    book: {
      id: '4',
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      cover_url: 'https://covers.openlibrary.org/b/id/7883783-M.jpg',
      average_rating: 4.3
    }
  },
  {
    id: '5',
    status: 'currently_reading',
    book: {
      id: '5',
      title: 'Educated',
      author: 'Tara Westover',
      cover_url: 'https://covers.openlibrary.org/b/id/8050356-M.jpg',
      average_rating: 4.6
    }
  }
];

export const DUMMY_LISTS = [
  {
    id: '1',
    title: 'My Favorite Sci-Fi Novels',
    description: 'A collection of the best science fiction books I\'ve read',
    is_public: true,
    book_count: 3,
    books: [2, 3]
  },
  {
    id: '2',
    title: 'Must-Read Thrillers',
    description: 'Page-turners that kept me up all night',
    is_public: true,
    book_count: 2,
    books: [4]
  },
  {
    id: '3',
    title: 'Personal Growth & Development',
    description: 'Books that inspired and changed my perspective',
    is_public: false,
    book_count: 1,
    books: [7]
  }
];

export const DUMMY_TOP_READERS = [
  {
    id: '1',
    username: 'Sarah Chen',
    profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    books_read_count: 47,
    reviews_count: 18
  },
  {
    id: '2',
    username: 'James Wilson',
    profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    books_read_count: 62,
    reviews_count: 24
  },
  {
    id: '3',
    username: 'Emma Rodriguez',
    profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    books_read_count: 35,
    reviews_count: 15
  },
  {
    id: '4',
    username: 'Michael Park',
    profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    books_read_count: 53,
    reviews_count: 21
  },
  {
    id: '5',
    username: 'Lisa Thompson',
    profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    books_read_count: 41,
    reviews_count: 19
  },
  {
    id: '6',
    username: 'David Lee',
    profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    books_read_count: 58,
    reviews_count: 22
  }
];
