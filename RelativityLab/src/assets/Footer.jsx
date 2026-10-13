import { Link } from "react-router-dom";
import { Footer, FooterImage, Section, FooterSpan } from "./Base";

export default function MainFooter() {
    return (
        <Section style={{marginTop:'170vh'}}>
            <Footer>
                <div>
                    <FooterImage src="me.png" alt="عکس من" />
                    <FooterSpan>
                        <h4><strong>آرین سپهری مهر</strong> ملقب به <strong>MACsepehri</strong></h4>
                        <Link target="_blank" to="https://web.bale.ai/@macsepehri">ارتباط در بله</Link>
                    </FooterSpan>
                </div>
            </Footer>
        </Section>
    )
}