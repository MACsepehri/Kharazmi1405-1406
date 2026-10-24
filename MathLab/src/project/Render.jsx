import { Section, SectionContent } from "../assets/css/Base";
import { ActionButton } from "../assets/css/ProjectStyle";

export default function RenderProject({ title, input_obj, action }) {
    return (
        <Section>
            <SectionContent>
                <h2>{title}</h2>

                <div>
                    {input_obj()}
                </div>

                <br />

                <div>
                    <ActionButton onClick={action}>
                        محاسبه
                    </ActionButton>
                </div>
            </SectionContent>
        </Section>
    );
}