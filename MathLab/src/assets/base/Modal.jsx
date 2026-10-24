import { CloseButton } from "../css/MainPage";

export default function FormulaModal({ formula_name, formula, onClose }) {
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
            }}
        >
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
                }}
            >
                <h2>فرمول {formula_name}</h2>

                <pre>{formula}</pre>

                <CloseButton onClick={onClose}>
                    بستن
                </CloseButton>
            </div>
        </div>
    );
}