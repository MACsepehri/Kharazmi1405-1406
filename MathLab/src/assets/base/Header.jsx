import { BaseHeader } from "../css/Base";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <BaseHeader>
            <div style={{ display: 'flex',flex: '1' }}>
                <div style={{ display: 'flex',flex: '1' }}>
                    <h1>Math Lab</h1>
                </div>
                <div style={{ marginTop:'15px' }}>
                    <p>آزمایشگاه ریاضی</p>
                </div>
            </div>
            <div>
                <nav style={{ display:'flex',gap:'30px',justifyContent:'center' }}>
                    <Link to="/">صفحه اصلی</Link>
                    <Link to="/#projects">عملیات ها</Link>
                    <Link to="/#footer">درباره پروژه</Link>
                </nav>
            </div>
        </BaseHeader>
    )
}