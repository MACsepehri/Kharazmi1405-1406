import { useState } from "react";
import { Section, SectionContent, Flex, Image } from "../css/Base";
import { CloseButton, OuterBox } from "../css/MainPage";
import { Link } from "react-router-dom";

const shapes = [
    ["مستطیل", "rectangle"],
    ["ذوزنقه", "trapezoid"],
    ["مربع", "square"],
    ["شش ضلعی", "hexagon"],
    ["هشت ضلعی", "octagon"],
    ["مثلث", "triangle"],
    ["متوازی‌الاضلاع", "parallelogram"],
    ["دایره", "circle"],
    ["بیضی", "ellipse"],
    ["پنج ضلعی", "pentagon"],
    ["هفت ضلعی", "heptagon"],
    ["نه ضلعی", "nonagon"],
    ["ده ضلعی", "decagon"],
    ["بادبادک", "kite"],
    ["نیم‌دایره", "semicircle"],
    ["ربع دایره", "quarter_circle"]
];

function Modal({ title, description, baseUrl, onClose }) {
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                zIndex: 999
            }}>
            <div
                onClick={(event) => event.stopPropagation()}
                style={{
                    width: "min(500px, 90%)",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    padding: "24px",
                    boxSizing: "border-box",
                    border: "2px solid var(--dark-border)",
                    borderRadius: "20px",
                    background: "var(--dark-card)",
                    color: "white"
                }}>
                <h2>{title}</h2>
                <p>{description}</p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "12px"
                    }}>
                    {shapes.map(([name, path]) => (
                        <Link
                            key={path}
                            to={`${baseUrl}/${path}`}
                            onClick={onClose}
                            style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "12px",
                                border: "1px solid var(--dark-border)",
                                borderRadius: "10px",
                                textAlign: "center"
                            }}>
                            {name}
                        </Link>
                    ))}
                </div>

                <CloseButton onClick={onClose}>
                    بستن
                </CloseButton>
            </div>
        </div>
    );
}

export default function PartTwo() {
    const [modal, setModal] = useState(null);

    return (
        <Section id="projects">
            <SectionContent>
                <Flex>
                    <OuterBox
                        onClick={() =>
                            setModal({
                                title: "محیط اشکال",
                                description: "محاسبه محیط اشکال هندسی",
                                baseUrl: "/project/round"
                            })
                        }>
                        <div>
                            <Image src="/image/round.png" />
                            <h3>محیط اشکال</h3>
                        </div>
                    </OuterBox>

                    <OuterBox
                        onClick={() =>
                            setModal({
                                title: "مساحت اشکال",
                                description: "محاسبه مساحت اشکال هندسی",
                                baseUrl: "/project/area"
                            })
                        }>
                        <div>
                            <Image src="/image/area.png" />
                            <h3>مساحت اشکال</h3>
                        </div>
                    </OuterBox>

                    <Link className="no-decoration" to="/project/density">
                        <OuterBox>
                            <div>
                                <Image src="/image/density.png" />
                                <h3>چگالی</h3>
                            </div>
                        </OuterBox>
                    </Link>

                    <Link className="no-decoration" to="/project/mass">
                        <OuterBox>
                            <div>
                                <Image src="/image/weight.png" />
                                <h3>جرم</h3>
                            </div>
                        </OuterBox>
                    </Link>

                    <Link className="no-decoration" to="/project/weight">
                        <OuterBox>
                            <div>
                                <Image src="/image/mass.png" />
                                <h3>وزن</h3>
                            </div>
                        </OuterBox>
                    </Link>
                </Flex>
            </SectionContent>

            {modal && (
                <Modal
                    {...modal}
                    onClose={() => setModal(null)}
                />
            )}
        </Section>
    );
}