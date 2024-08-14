import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Course.css";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://book-store-backend-qda2.onrender.com/book"
        );

        const premium = res.data.filter((item) => item.category != "Free");
        console.log(premium);
        setBook(premium);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white dark:border">
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">
              Books at Book Haven{" "}
              <span className="text-pink-500"> Here! :)</span>
            </h1>

            <div className="category-h ">
              <h2>Discover Your Next Favorite Book</h2>
            </div>
            <div className="category">
              <p>
                At Book Haven, we offer a wide variety of books for every type
                of reader. From the latest bestsellers to timeless classics, our
                collection has something for everyone.
              </p>
            </div>
            <div className="books-container p-6 bg-gray-100 border-none dark:bg-slate-900 dark:text-white dark:border">
              <h1 className="text-center text-4xl mb-8">Our Book Categories</h1>

              <div className="category bg-white p-6 mb-6 rounded-lg shadow-md border-none ">
                <h2 className="text-2xl mb-4 text-blue-600">Fiction</h2>
                <p className="text-base leading-relaxed text-gray-800">
                  Dive into imaginative worlds with our fiction books. Whether
                  you love romance, mystery, science fiction, or fantasy, we
                  have a story that will captivate you.
                </p>
              </div>

              <div className="category bg-white p-6 mb-6 rounded-lg shadow-md border-none">
                <h2 className="text-2xl mb-4 text-blue-600">Non-Fiction</h2>
                <p className="text-base leading-relaxed text-gray-800">
                  Learn something new with our non-fiction collection. Explore
                  books on history, science, self-help, biographies, and more.
                  Perfect for curious minds.
                </p>
              </div>

              <div className="category bg-white p-6 mb-6 rounded-lg shadow-md border-none">
                <h2 className="text-2xl mb-4 text-blue-600">
                  Children’s Books
                </h2>
                <p className="text-base leading-relaxed text-gray-800">
                  Inspire young readers with our selection of children’s books.
                  We have picture books, early readers, and young adult novels
                  that kids will love.
                </p>
              </div>

              <div className="category bg-white p-6 mb-6 rounded-lg shadow-md border-none">
                <h2 className="text-2xl mb-4 text-blue-600">Educational</h2>
                <p className="text-base leading-relaxed text-gray-800">
                  Support your studies with our educational books. From
                  textbooks to study guides, find the resources you need to
                  succeed in school.
                </p>
              </div>

              <div className="category bg-white p-6 mb-6 rounded-lg shadow-md border-none">
                <h2 className="text-2xl mb-4 text-blue-600">
                  Comics and Graphic Novels
                </h2>
                <p className="text-base leading-relaxed text-gray-800">
                  Enjoy the art and storytelling of comics and graphic novels.
                  We offer a variety of genres, including superheroes, manga,
                  and more.
                </p>
              </div>
            </div>

            <Link to={"/"}>
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
