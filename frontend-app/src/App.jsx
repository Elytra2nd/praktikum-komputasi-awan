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
        boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)',
        textAlign: 'center'
      }}>
        <h1 style={{fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '700'}}>
          🚀 Praktikum Komputasi Awan - UAS
        </h1>
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          padding: '1.5rem',
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <p style={{fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: '600'}}>
            ✨ CI/CD Pipeline Successfully Deployed!
          </p>
          <p style={{fontSize: '1rem', opacity: 0.95, marginBottom: '1rem'}}>
            GitHub Push → Webhook → Auto Build & Deploy 🎯
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginTop: '1.5rem',
            fontSize: '0.9rem'
          }}>
            <div style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.12)',
              borderRadius: '8px'
            }}>
              <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>⚛️</div>
              <strong style={{display: 'block', marginBottom: '0.3rem'}}>Frontend</strong>
              <div style={{fontSize: '0.85rem', opacity: 0.9}}>React + Vite</div>
              <div style={{color: '#4ade80', marginTop: '0.5rem', fontWeight: '600'}}>
                Port 3000 ✓
              </div>
            </div>
            <div style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.12)',
              borderRadius: '8px'
            }}>
              <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>🔧</div>
              <strong style={{display: 'block', marginBottom: '0.3rem'}}>Backend</strong>
              <div style={{fontSize: '0.85rem', opacity: 0.9}}>Laravel 11 API</div>
              <div style={{color: '#4ade80', marginTop: '0.5rem', fontWeight: '600'}}>
                Port 8000 ✓
              </div>
            </div>
          </div>
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '8px',
            fontSize: '0.85rem'
          }}>
            <div style={{marginBottom: '0.5rem', fontWeight: '600'}}>
              🕐 Auto-deployed: {new Date().toLocaleString('id-ID', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
            <div style={{opacity: 0.85, fontSize: '0.8rem'}}>
              🔄 CI/CD Pipeline: GitHub Webhook → Docker Build → Deploy
            </div>
          </div>
        </div>
      </header>
      <ProductList />
    </div>
  )
}

export default App
