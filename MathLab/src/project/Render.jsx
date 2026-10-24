import { useState } from "react";
import FormulaModal from "../assets/base/Modal";
import { Flex, Section, SectionContent } from "../assets/css/Base";
import { ActionButton } from "../assets/css/ProjectStyle";

export default function RenderProject({ title, input_obj, action, formula }) {
    const [showFormula, setShowFormula] = useState(false);

    return (
        <Section>
            <SectionContent>
                <h2>{title}</h2>

                <div>
                    {input_obj()}
                </div>

                <br />

                <Flex>
                    <ActionButton onClick={action}>
                        محاسبه
                    </ActionButton>
                    <ActionButton onClick={() => setShowFormula(true)}>
                        مشاهده فرمول
                    </ActionButton>
                </Flex>

                {showFormula && (
                    <FormulaModal formula_name={formula[0]} formula={formula[1]} onClose={() => setShowFormula(false)}/>
                )}
            </SectionContent>
        </Section>
    );
}