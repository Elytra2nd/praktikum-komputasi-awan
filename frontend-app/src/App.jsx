import './App.css'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="App">
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2.5rem',
        color: 'white',
        marginBottom: '2rem',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        textAlign: 'center'
      }}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
          🚀 Praktikum Komputasi Awan
        </h1>
        <p style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>
          ✨ Full CI/CD Pipeline with Komodo + GitHub
        </p>
        <p style={{fontSize: '0.95rem', opacity: 0.9}}>
          Auto Deploy Working! Push → Webhook → Pull → Build → Deploy 🎯
        </p>
        <small style={{opacity: 0.8, display: 'block', marginTop: '1rem'}}>
          Deployment completed in under 3 minutes
        </small>
      </header>
      <ProductList />
    </div>
  )
}

export default App
