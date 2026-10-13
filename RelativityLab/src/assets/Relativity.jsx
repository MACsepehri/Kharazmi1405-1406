import { RelativityBox, RelativityButton, RelativityInput, Section } from "./Base";

export default function Relativity() {
    return (
        <div>
            <Section>
                <h1>محاسبه اتساع زمان</h1><br />
                <div>
                    <RelativityBox style={{flexDirection:'column'}}>
                        <div style={{display:'flex',gap:'30px'}}>
                            <RelativityInput type="text" placeholder="سرعت (km/h)" />
                            <RelativityInput type="text" placeholder="جرم شئ که به دور آن میچرخیم" />
                        </div>
                        <div style={{display:'flex',gap:'30px'}}>
                            <RelativityInput type="text" placeholder="فاصله تا مرکز شئ (km)" />
                            <RelativityInput type="text" placeholder="مدت زمان آزمایش (روز)" />
                        </div><br />
                        <RelativityButton>محاسبه</RelativityButton>
                    </RelativityBox>
                </div>
            </Section>
        </div>
    )
}