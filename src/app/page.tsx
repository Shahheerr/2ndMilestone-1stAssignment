export default function Home() {
  return (
    <div>
      <h1>Welcome to BookNook</h1>
      <p>Discover your next favorite book at BookNook, your local independent bookstore.</p>
      <h2>Featured Books</h2>
      <div className="grid">
        <div className="card">
          <h3>The Great Gatsby</h3>
          <p>F. Scott Fitzgerald</p>
        </div>
        <div className="card">
          <h3>To Kill a Mockingbird</h3>
          <p>Harper Lee</p>
        </div>
        <div className="card">
          <h3>1984</h3>
          <p>George Orwell</p>
        </div>
      </div>
    </div>
  )
}