import { Category, Book, User } from "./models";

const user = new User({
  name: "Marcia",
  lastName: "Orozco",
  birthdate: new Date("1997-11-11"),
  email: "marcia.orozco@gmail.com",
  isAdmin: true,
});

const book = new Book({
  name: "Orgullo y prejuicio",
  description:
    "La señora Bennet ha criado a sus cinco hijas con el único deseo de encontrar marido. La llegada al vecindario de Charles Bingley, un joven rico y soltero, con algunas amistades despierta el interés de las hermanas Bennet y de las familias vecinas, que verán una excelente oportunidad para cumplir su propósito. Elizabeth, una de las hijas de los Bennet, empezará una singular relación con Darcy, uno de los amigos de Bingley, que desencadenará esta historia de orgullo y prejuicios entre los dos hasta llegar a conocer el verdadero amor. ",
  author: "Jane Austen",
  isbn: "9780743273565",
  isActive: true,
  image: "prideandprejudice.jpg",
});

const category = new Category({
  name: "Romance",
  books: [""],
});

export const syncDatabase = async () => {
  try {
    await user.save();
    await book.save();
    await category.save();
    console.log("Database sincronizada");
  } catch (error) {
    console.error(error);
  }
};
