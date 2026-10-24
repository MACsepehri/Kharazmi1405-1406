import { useState } from "react";
import FormulaModal from "../assets/base/Modal";
import { Section, SectionContent } from "../assets/css/Base";
import { ActionButton, InputBox } from "../assets/css/ProjectStyle";

export default function RoundRender({ title, input_obj, calc }) {
    const [showFormula, setShowFormula] = useState(false);
    
    function calculate() {
        let res = calc();
        let res_var = document.getElementById('res');
        let unit = document.getElementById('unit').value

        if (!res[1]) {
            res_var.innerText = 'ورودی های نامعتبر';
        } else {
            if (unit.trim()==='') {
                unit = ''
            }
            res_var.innerText = `${res[0]} ${unit}`;
        }
    }

    return (
        <Section>
            <SectionContent>
                <h2>محیط {title}</h2>

                <div>
                    {input_obj}<br /><hr /><br />
                    <InputBox type="text" id="unit" placeholder="واحد (اختیاری)" />
                    <p id="res"></p>
                </div>

                <br />

                <div>
                    <ActionButton onClick={calculate}>
                        محاسبه
                    </ActionButton>
                </div>

                {showFormula && (
                    <FormulaModal formula_name={formula[0]} formula={formula[1]} onClose={() => setShowFormula(false)}/>
                )}
            </SectionContent>
        </Section>
    );
}