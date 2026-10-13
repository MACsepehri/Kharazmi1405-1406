import { useState } from "react";
import {
    RelativityBox,
    RelativityButton,
    RelativityInput,
    Section
} from "./Base";

const astronomicalObjects = [
    {
        name: "خورشید",
        mass: 1.989e30,
        radius: 696340
    },
    {
        name: "ابط‌الجوزا",
        mass: 2.78e31,
        radius: 617000000
    },
    {
        name: "سیاه‌چاله کوچک",
        mass: 10 * 1.989e30,
        radius: null
    },
    {
        name: "سیاه‌چاله کلان‌جرم",
        mass: 4.154e6 * 1.989e30,
        radius: null
    },
    {
        name: "TON 618",
        mass: 6.6e10 * 1.989e30,
        radius: null
    }
];

export default function Relativity() {
    const [speed, setSpeed] = useState("100000");
    const [mass, setMass] = useState("");
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("30");
    const [selectedObject, setSelectedObject] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    function selectObject(object) {
        setSelectedObject(object);
        setMass(String(object.mass));

        const G = 6.67430e-11;
        const c = 299792458;

        const schwarzschildRadius =
            (2 * G * object.mass) / (c ** 2) / 1000;

        const defaultDistance = object.radius
            ? object.radius * 1.5
            : schwarzschildRadius * 2;

        setDistance(String(defaultDistance));
        setResult(null);
        setError("");
        setIsModalOpen(false);
    }

    function calculateTimeDilation() {
        const G = 6.67430e-11;
        const c = 299792458;

        const v = Number(speed) / 3.6;
        const m = Number(mass);
        const r = Number(distance) * 1000;
        const t = Number(duration) * 86400;

        if (
            speed.trim() === "" ||
            mass.trim() === "" ||
            distance.trim() === "" ||
            duration.trim() === "" ||
            !Number.isFinite(v) ||
            !Number.isFinite(m) ||
            !Number.isFinite(r) ||
            !Number.isFinite(t) ||
            v < 0 ||
            v >= c ||
            m <= 0 ||
            r <= 0 ||
            t <= 0
        ) {
            setError("لطفاً مقادیر معتبر وارد کنید.");
            setResult(null);
            setIsModalOpen(false);
            return;
        }

        const schwarzschildRadius = (2 * G * m) / (c ** 2);

        if (r <= schwarzschildRadius) {
            setError(
                "فاصله از مرکز باید بیشتر از شعاع شوارتزشیلد باشد."
            );
            setResult(null);
            setIsModalOpen(false);
            return;
        }

        const velocityFactor = Math.sqrt(
            1 - (v ** 2 / c ** 2)
        );

        const gravityFactor = Math.sqrt(
            1 - (schwarzschildRadius / r)
        );

        const timeDilation = velocityFactor * gravityFactor;
        const elapsedSeconds = t * timeDilation;

        setResult([
            elapsedSeconds,
            elapsedSeconds / 60,
            elapsedSeconds / 3600,
            elapsedSeconds / 86400,
            elapsedSeconds / 2629800,
            elapsedSeconds / 31557600
        ]);

        setError("");
        setIsModalOpen(true);
    }

    const units = [
        "ثانیه",
        "دقیقه",
        "ساعت",
        "روز",
        "ماه",
        "سال"
    ];

    return (
        <>
            <style>
                {`
                    .outer-header {
                        position: relative !important;
                    }

                    .main-section {
                        position: relative !important;
                        top: auto !important;
                        right: auto !important;
                        transform: none !important;
                        margin-top: -100px !important;
                    }

                    .astronomical-objects {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        width: 100%;
                    }

                    .astronomical-object-button {
                        width: 100%;
                        height: 45px;
                        min-height: 45px;
                        box-sizing: border-box;
                    }

                    .relativity-inputs {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 15px;
                        width: 100%;
                        box-sizing: border-box;
                    }

                    .result-modal-overlay {
                        position: fixed;
                        inset: 0;
                        z-index: 9999;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        box-sizing: border-box;
                        background: rgba(0, 0, 0, 0.75);
                        backdrop-filter: blur(5px);
                        animation: modalFadeIn 0.2s ease;
                    }

                    .result-modal {
                        position: relative;
                        width: 100%;
                        max-width: 500px;
                        max-height: 85vh;
                        overflow-y: auto;
                        padding: 25px;
                        box-sizing: border-box;
                        border: 1px solid var(--border);
                        border-radius: 16px;
                        background: var(--card);
                        color: var(--text);
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
                        animation: modalSlideIn 0.25s ease;
                    }

                    .result-modal-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        margin-bottom: 20px;
                    }

                    .result-modal-header h2 {
                        margin: 0;
                        font-size: 22px;
                    }

                    .result-modal-close {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 36px;
                        height: 36px;
                        flex-shrink: 0;
                        border: 1px solid var(--border);
                        border-radius: 8px;
                        background: transparent;
                        color: var(--text);
                        font-size: 23px;
                        cursor: pointer;
                    }

                    .result-modal-close:hover {
                        background: var(--border);
                    }

                    .result-modal-description {
                        color: var(--secondary);
                        font-size: 14px;
                        margin-bottom: 20px;
                    }

                    .result-modal-results {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }

                    .result-modal-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        padding: 13px 15px;
                        border: 1px solid var(--border);
                        border-radius: 10px;
                        background: var(--background);
                    }

                    .result-modal-unit {
                        color: var(--secondary);
                        white-space: nowrap;
                    }

                    .result-modal-value {
                        direction: ltr;
                        text-align: left;
                        overflow-wrap: anywhere;
                        font-weight: bold;
                    }

                    .result-modal-footer {
                        margin-top: 20px;
                        width: 100%;
                    }

                    @keyframes modalFadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    @keyframes modalSlideIn {
                        from {
                            opacity: 0;
                            transform: translateY(15px) scale(0.98);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    @media (max-width: 500px) {
                        .main-section {
                            margin-top: 300px !important;
                        }

                        .relativity-inputs {
                            grid-template-columns: minmax(0, 1fr);
                        }

                        .result-modal {
                            padding: 20px;
                        }

                        .result-modal-header h2 {
                            font-size: 19px;
                        }

                        .result-modal-row {
                            padding: 12px;
                        }
                    }
                `}
            </style>

            <Section className="main-section">
                <h1>محاسبه اتساع زمان</h1>

                <p>یک جرم آسمانی انتخاب کن یا مقادیر دلخواهت را وارد کن.</p>

                <RelativityBox style={{flexDirection: "column",gap: "20px",padding: "25px",boxSizing: "border-box"}}>
                    <h3>انتخاب جرم آسمانی</h3>

                    <div className="astronomical-objects">
                        {astronomicalObjects.map((object) => (
                            <RelativityButton
                                key={object.name}
                                onClick={() => selectObject(object)}
                                className="astronomical-object-button"
                                style={{
                                    opacity:
                                        selectedObject?.name === object.name
                                            ? 1
                                            : 0.75
                                }}
                            >
                                {object.name}
                            </RelativityButton>
                        ))}
                    </div>

                    <div className="relativity-inputs">
                        <RelativityInput
                            type="number"
                            placeholder="سرعت (km/h)" value={speed} onChange={(e) => setSpeed(e.target.value)}/>

                        <RelativityInput type="number" placeholder="جرم جسم (kg)" value={mass} onChange={(e) => setMass(e.target.value)}/>

                        <RelativityInput type="number" placeholder="فاصله از مرکز (km)" value={distance} onChange={(e) => setDistance(e.target.value)}/>

                        <RelativityInput type="number" placeholder="مدت آزمایش (روز)" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    </div>

                    <RelativityButton onClick={calculateTimeDilation}>
                        محاسبه اتساع زمان
                    </RelativityButton>

                    {error && (
                        <p style={{ color: "#F85149" }}>
                            {error}
                        </p>
                    )}
                </RelativityBox>
            </Section>

            {isModalOpen && result && (
                <div
                    className="result-modal-overlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setIsModalOpen(false);
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") {
                            setIsModalOpen(false);
                        }
                    }}>
                    <div className="result-modal" role="dialog" aria-modal="true" aria-labelledby="result-modal-title">
                        <div className="result-modal-header">
                            <h2 id="result-modal-title">
                                نتایج محاسبه
                            </h2>

                            <button type="button" className="result-modal-close" onClick={() => setIsModalOpen(false)} aria-label="بستن">
                                ×
                            </button>
                        </div>

                        <p className="result-modal-description">
                            زمان سپری‌شده برای ناظر متحرک در میدان گرانشی (یعنی n تایم جون تر شده نسبت به بقیه روی زمین) :
                        </p>

                        <div className="result-modal-results">
                            {result.map((value, index) => (
                                <div className="result-modal-row" key={units[index]}>
                                    <span className="result-modal-unit">
                                        {units[index]}
                                    </span>

                                    <span className="result-modal-value">
                                        {value.toLocaleString("en-US", {
                                            maximumFractionDigits: 6
                                        })}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="result-modal-footer">
                            <RelativityButton onClick={() => setIsModalOpen(false)} style={{ width: "100%" }}>
                                بستن نتایج
                            </RelativityButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}