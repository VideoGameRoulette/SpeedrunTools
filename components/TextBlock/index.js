import { classNames } from "utils";

export const TextBlock = ({ label, val, colors, hideParam }) => {
    if (hideParam) { return; }
    return (
        <div className={classNames(colors[0], "w-full title font-bold text-lg px-2")}>{label}: <span className={classNames(colors[1])}>{val}</span></div>
    );
}

export const TextBlocks = ({ labels, vals, colors, hideParam }) => {
    if (hideParam) { return; }
    return (
        <div className="w-full flex flex-col font-bold text-lg">
            {labels.map((label, idx) => (
                <div key={`label${idx}`} className={classNames(colors[0], "title")}>{label}: <span className={classNames(colors[1])}>{vals[idx]}</span></div>
            ))}
        </div>
    );
}

export const TextBlocksRow = ({ labels, vals, colors, hideParam }) => {
    if (hideParam) { return; }
    return (
        <div className="w-full flex gap-4 font-bold text-lg">
            {labels.map((label, idx) => (
                <div key={`label${idx}`} className={classNames(colors[0], "title")}>{label}: <span className={classNames(colors[1], "font-normal")}>{vals[idx]}</span></div>
            ))}
        </div>
    );
}

export const TextBlocksRowBetween = ({ labels, vals, colors, hideParam }) => {
    if (hideParam) { return; }
    return (
        <div className="w-full flex justify-between font-bold text-lg px-2">
            {labels.map((label, idx) => (
                <div key={`label${idx}`} className={classNames(colors[0], "title")}>{label}: <span className={classNames(colors[1])}>{vals[idx]}</span></div>
            ))}
        </div>
    );
}