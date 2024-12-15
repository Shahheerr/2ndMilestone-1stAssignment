export default function Books() {
    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "1984", author: "George Orwell" },
        { title: "Pride and Prejudice", author: "Jane Austen" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
    ];

    return (
        <div>
            <h1>Our Books</h1>
            <div className="grid">
                {books.map((book, index) => (
                    <div key={index} className="card">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
