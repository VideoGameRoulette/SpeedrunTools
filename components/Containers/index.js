export const MainContainer = ({ children }) => {
    return (
        <div className="absolute w-full h-full grid grid-rows-[4rem_1fr]">
            {children}
        </div>
    )
}

export const SecondaryContainer = ({ children }) => {
    return (
        <div className="md:grid md:grid-cols-[24rem_1fr] w-full h-full overflow-hidden">
            {children}
        </div>
    )
}