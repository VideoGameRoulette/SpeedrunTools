import { classNames } from "utils";

const HealthBar = ({ current, max, percent, label, colors }) => {
    const p = percent * 100;
    const pStr = `${p}%`;
    return (
        <div className="relative border-2 h-8">
            <div className={classNames(colors[0], "w-full h-7")} style={{ width: pStr }}>
                <div className="absolute w-full flex justify-between items-center text-xl px-2 font-bold">
                    <div className="text-white">
                        {label} {current} / {max}
                    </div>
                    <div className={classNames(colors[1], "text-xl")} id="percentprogress">{(percent * 100).toFixed(1)}%</div>
                </div>
            </div>
        </div>
    )
}

export default HealthBar;