import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <h2>404 — Page not found</h2>
      <p>We couldn't find that page. Try returning to the home page.</p>
      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default NotFound
