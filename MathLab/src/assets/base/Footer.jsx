import { Flex, FooterImage, Section, SectionContent } from "../css/Base";

export default function Footer() {
    return (
        <Section>
            <SectionContent>
                <Flex>
                    <div>
                        <FooterImage src="/image/myself.png" alt="" />
                    </div>
                    <div style={{marginTop:'100px'}}>
                        <h2>ساخته شده توسط آرین سپهری مهر</h2>
                        <p>دبیرستان ثارالله کلاس 701</p>
                    </div>
                </Flex>
            </SectionContent>
        </Section>
    )
}