import './App.css'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="App">
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem',
        color: 'white',
        marginBottom: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1>🚀 Praktikum Komputasi Awan</h1>
        <p>CI/CD Auto Deploy Test - Updated via GitHub Webhook</p>
      </header>
      <ProductList />
    </div>
  )
}

export default App
