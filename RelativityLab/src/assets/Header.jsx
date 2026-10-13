import { Link } from 'react-router-dom'
import { Header } from './Base.jsx'

export default function MainHeader() {
    return (
        <Header>
            <div>
                <div style={{display:'flex',gap:'50px'}}>
                    <h1>Relativity Lab</h1>
                    <h3 style={{marginTop:'30px'}}>محاسبه اتساع زمان</h3>
                </div>
                <nav dir='rtl' style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <Link to="/">صفحه اصلی</Link>
                    <Link to="/relativity">شروع محاسبه</Link>
                    <Link to="/about">درباره ما</Link>
                </nav><br />
            </div>
        </Header>
    )
}