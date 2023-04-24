export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const removePrefix = (str, prefix) => {
    return str.split(prefix)[1];
}

export const pad = i => i.toString().padStart(2, '0');

export const timeDiff = (start, end) => {
    const timestamp = Math.floor((end - start) / 1000);

    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - hours * 60;
    const seconds = Math.floor(timestamp % 60);

    return {
        hours,
        minutes,
        seconds,
        formatted: `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
        formattedMin: `${pad(minutes)}:${pad(seconds)}`,
    };
};

export const convertTime = seconds => {
    const hr = Math.floor(seconds / 60 / 60);
    const min = Math.floor(seconds / 60) - hr * 60;
    const sec = Math.floor(seconds % 60);

    return `${pad(hr)}:${pad(min)}:${pad(sec)}`;
};