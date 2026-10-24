import { useState } from "react";
import { Section, SectionContent } from "../css/Base";
import { CloseButton, Flex, OuterBox } from "../css/MainPage";
import { Link } from "react-router-dom";

const shapes = [
    ["مستطیل", "rectangle"],
    ["ذوزنقه", "trapezoid"],
    ["مربع", "square"],
    ["شش ضلعی", "hexagon"],
    ["هشت ضلعی", "octagon"],
    ["مثلث", "triangle"],
    ["مثلث متساوی‌الساقین", "isosceles_triangle"],
    ["مثلث متساوی‌الاضلاع", "equilateral_triangle"],
    ["مثلث قائم‌الزاویه", "right_triangle"],
    ["متوازی‌الاضلاع", "parallelogram"],
    ["لوزی", "rhombus"],
    ["دایره", "circle"],
    ["بیضی", "ellipse"],
    ["پنج ضلعی", "pentagon"],
    ["هفت ضلعی", "heptagon"],
    ["نه ضلعی", "nonagon"],
    ["ده ضلعی", "decagon"],
    ["چهارضلعی", "quadrilateral"],
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
                    border: "2px solid var(--dark-blue-border)",
                    borderRadius: "20px",
                    background: "#050e1a",
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
                                border: "1px solid var(--dark-blue-border)",
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
                        <h3>محیط اشکال</h3>
                    </OuterBox>

                    <OuterBox
                        onClick={() =>
                            setModal({
                                title: "مساحت اشکال",
                                description: "محاسبه مساحت اشکال هندسی",
                                baseUrl: "/project/area"
                            })
                        }>
                        <h3>مساحت اشکال</h3>
                    </OuterBox>

                    <Link className="no-decoration" to="/project/density">
                        <OuterBox>
                            <h3>چگالی</h3>
                        </OuterBox>
                    </Link>

                    <Link className="no-decoration" to="/project/mass">
                        <OuterBox>
                            <h3>جرم</h3>
                        </OuterBox>
                    </Link>

                    <Link className="no-decoration" to="/project/weight">
                        <OuterBox>
                            <h3>وزن</h3>
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