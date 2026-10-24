import { BaseHeader } from "../css/Base";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <BaseHeader dir="ltr">
            <div style={{ display: 'flex',flex: '1' }}>
                <div style={{ display: 'flex',flex: '1',marginTop:'20px' }}>
                    <h1>Math Lab</h1>
                </div>
                <div style={{ marginTop:'35px' }}>
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