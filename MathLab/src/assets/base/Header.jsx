import { BaseHeader, Flex, Image } from "../css/Base";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <BaseHeader dir="ltr">
            <div style={{ display: 'flex',flex: '1' }}>
                <Flex>
                    <Image src="/image/header-logo.png" />
                    <h1 style={{ marginTop:'45px' }}>Math Lab</h1>
                </Flex>
            </div>
            <div>
                <nav style={{ display:'flex',gap:'30px',justifyContent:'center',marginTop:'55px' }}>
                    <Link to="/">صفحه اصلی</Link>
                    <Link to="/#projects">عملیات ها</Link>
                    <Link to="/#footer">درباره پروژه</Link>
                </nav>
            </div>
        </BaseHeader>
    )
}