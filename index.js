require('dotenv').config();

const mongoose = require('mongoose');
const mongoolia = require('mongoolia').default;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error) => console.error(`Failed to connect to ${process.env.MONGODB_URI}`));
db.once('open', () => console.log(`Connected to ${process.env.MONGODB_URI}`));

// Pass `{algoliaIndex: true}` to push theses attributes for indexing to Algolia
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, algoliaIndex: true },
  author: { type: String, required: true, algoliaIndex: true },
  description: { type: String, required: true, algoliaIndex: true }
});

// Specify your Algolia credentials which you can find into your dashboard
BookSchema.plugin(mongoolia, {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_KEY,
  indexName: process.env.ALGOLIA_INDEX_NAME,
});

const Book = mongoose.model('Book', BookSchema);

const book = new Book({
  title: 'title',
  author: 'author',
  description: 'description',
});

book.save().then(() => {
  console.log('book saved OK');
  Book.syncWithAlgolia().then(
    () => console.log('All synced with algolia')
  ).catch(
    error => console.error(`Failed to sync with algolia: ${error.message}`)
  );
}).catch(error => console.error(`Failed to save book: ${error.message}`));

console.log('Press any key to exit');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
