import { classNames } from "utils";

export const ErrorPage = ({ background, connected, callback }) => {
    return (
        <>
            <main className="relative w-full h-[100vh] isolate min-h-full">
                <div className={classNames(background, "absolute inset-0 -z-10 h-full w-full bg-cover bg-bottom brightness-50")} />
                <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                    <p className="text-base font-semibold leading-8 text-white">{connected ? 200 : 404}</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{connected ? "Connected to Game" : "Game not found!"}</h1>
                    <p className="mt-4 text-base text-white/70 sm:mt-6">{connected ? "Awaiting session event to start..." : "Sorry, we couldn’t find the game please start a game session."}</p>
                    {!connected && (
                        <button className="bg-green-800 hover:bg-green-600 p-4 rounded-md font-bold text-gray-200 mt-8" type="button" onClick={() => callback()}>Connect</button>
                    )}
                </div>
            </main>
        </>
    )
}

export const GameErrorPage = ({ background, callback }) => {
    return (
        <>
            <main className="relative w-full h-[100vh] isolate min-h-full">
                <div className={classNames(background, "absolute inset-0 -z-10 h-full w-full bg-cover bg-bottom brightness-50")} />
                <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                    <p className="text-base font-semibold leading-8 text-white">{502}</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Incorrect Game Detected!</h1>
                    <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the game please start a game session.</p>
                    <button className="bg-green-800 hover:bg-green-600 p-4 rounded-md font-bold text-gray-200 mt-8" type="button" onClick={() => callback()}>Connect</button>
                </div>
            </main>
        </>
    )
}