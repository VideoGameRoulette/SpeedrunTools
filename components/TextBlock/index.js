import { classNames } from "utils";

export const TextBlock = ({ label, val, colors, hideParam }) => {
    if (hideParam) { return; }
    return (
        <div className={classNames(colors[0], "title font-bold")}>{label}: <span className={classNames(colors[1], "font-normal")}>{val}</span></div>
    );
}

export const TextBlocks = ({ labels, vals, colors, hideParam }) => {
    if (hideParam) { return; }
    return (
        <div className="w-full flex flex-col">
            {labels.map((label, idx) => (
                <div key={`label${idx}`} className={classNames(colors[0], "title font-bold")}>{label}: <span className={classNames(colors[1], "font-normal")}>{vals[idx]}</span></div>
            ))}
        </div>
    );
}