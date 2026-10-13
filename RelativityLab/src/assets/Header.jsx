import { Link } from 'react-router-dom'
import { Header, OuterHeader } from './Base.jsx'

export default function MainHeader() {
    return (
        <OuterHeader className="outer-header">
            <Header>
                <div>
                    <div>
                        <h2>Relativity Lab</h2>
                        <h3>محاسبه اتساع زمان</h3>
                    </div>

                    <nav dir="rtl">
                        <Link to="/">صفحه اصلی</Link>
                        <Link to="/relativity">شروع محاسبه</Link>
                        <Link to="/about">درباره ما</Link>
                    </nav>
                </div>
            </Header>
        </OuterHeader>
    );
}