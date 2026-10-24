import { Section, SectionContent } from "../css/Base";
import { Flex, OuterBox } from "../css/MainPage";

function openModalBox(func) {
    return 0;
}

export default function PartTwo() {
    return (
        <Section id="projects">
            <SectionContent>
                <Flex>
                    {/*  */}
                    <OuterBox>
                        <h3>محیط اشکال</h3>
                    </OuterBox>
                    {/*  */}
                    <OuterBox>
                        <h3>مساحت اشکال</h3>
                    </OuterBox>
                    {/*  */}
                    <OuterBox>
                        <h3>چگالی</h3>
                    </OuterBox>
                    {/*  */}
                    <OuterBox>
                        <h3>جرم</h3>
                    </OuterBox>
                    {/*  */}
                    <OuterBox>
                        <h3>وزن</h3>
                    </OuterBox>
                </Flex>
            </SectionContent>
        </Section>
    )
}