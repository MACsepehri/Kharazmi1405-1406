import { Section, SectionContent } from "../assets/css/Base";
import { ActionButton, InputBox } from "../assets/css/ProjectStyle";

export default function AreaRender({ title, input_obj, calc }) {
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
                <h2>مساحت {title}</h2>

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
        </SectionContent>
    </Section>
    );
}
