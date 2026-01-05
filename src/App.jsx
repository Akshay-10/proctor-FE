import { useState } from 'react'
import './App.css'

function App({ config }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="proctor-overlay">
      <div className="proctor-box">
        <h2>Proctoring Active</h2>
        <div className="camera-feed-placeholder">
          <p>Camera Feed</p>
          <div className="animate-pulse">🔴 Recording</div>
        </div>
        <div className="instructions">
          <p>Please keep your face in the frame.</p>
          {config?.userId && <p className="user-info">User: {config.userId}</p>}
        </div>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  )
}

export default App
