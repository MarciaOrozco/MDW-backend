import { Book } from "./models";

const books = [
  {
    name: "Pride and Prejudice",
    description:
      "Mrs. Bennet has raised her five daughters with the sole purpose of finding them husbands. The arrival of Charles Bingley, a wealthy and single young man, along with his friends, excites the Bennet family and their neighbors, presenting a great opportunity to achieve their goal. Elizabeth, one of the Bennet daughters, begins a peculiar relationship with Darcy, one of Bingley's friends, which will unfold into a story of pride and prejudice, leading to the discovery of true love.",
    author: "Jane Austen",
    isbn: "9780743273565",
    isAvailable: true,
    price: 35,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "To Kill a Mockingbird",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice. It views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
    author: "Harper Lee",
    isbn: "9780061120084",
    isAvailable: true,
    price: 25,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "1984",
    description:
      "George Orwell’s dystopian masterpiece, Nineteen Eighty-Four is perhaps the most pervasively influential book of the twentieth century, making famous Big Brother, newspeak, and Room 101.",
    author: "George Orwell",
    isbn: "9780451524935",
    isAvailable: true,
    price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "The Great Gatsby",
    description:
      "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession.'",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    isAvailable: true,
    price: 30,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Moby Dick",
    description:
      "A thrilling adventure story, a timeless allegory, and an epic saga of heroic determination and conflict. It is the story of Captain Ahab’s obsessive quest to kill Moby Dick, the great white whale who maimed him.",
    author: "Herman Melville",
    isbn: "9780142437247",
    isAvailable: true,
    price: 40,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Eyre",
    description:
      "An orphaned young woman struggles against the rigid constraints of her class and society, and the limits of her own passions.",
    author: "Charlotte Brontë",
    isbn: "9780141441146",
    isAvailable: true,
    price: 28,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "The Catcher in the Rye",
    description:
      "The story of Holden Caulfield, a teenager navigating the challenges of adolescence in mid-20th century New York City.",
    author: "J.D. Salinger",
    isbn: "9780316769488",
    isAvailable: true,
    price: 22,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Wuthering Heights",
    description:
      "A story of passion and revenge on the Yorkshire moors. Catherine Earnshaw and Heathcliff share a turbulent and ultimately tragic love story.",
    author: "Emily Brontë",
    isbn: "9780141439556",
    isAvailable: true,
    price: 24,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Brave New World",
    description:
      "A dystopian novel set in a futuristic World State, where citizens are engineered into an intelligence-based social hierarchy.",
    author: "Aldous Huxley",
    isbn: "9780060850524",
    isAvailable: true,
    price: 18,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "The Hobbit",
    description:
      "Bilbo Baggins, a hobbit, is taken on an epic adventure by Gandalf and a group of dwarves to recover their stolen treasure from the dragon Smaug.",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    isAvailable: true,
    price: 35,
    image: "https://via.placeholder.com/150",
  },
];

export const syncDatabase = async () => {
  try {
    for (const bookData of books) {
      const book = new Book(bookData);
      await book.save();
    }

    console.log("Database sincronizada");
  } catch (error) {
    console.error(error);
  }
};
