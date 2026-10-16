import {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="min-h-screen bg-slate-950
                     text-white flex items-center
                     justify-center p-6">

            <section className="w-full max-w-md rounded-2xl
                          border border-slate-800
                          bg-slate-900 p-8 shadow-xl">

                <p className="text-sm text-blue-400 font-medium">
                    Better Stack Interview
                </p>

                <h1 className="text-3xl font-bold mt-3">
                    Hello World!
                </h1>

                <p className="text-slate-400 mt-2">
                    React + TypeScript + Tailwind CSS
                </p>

                <div
                    data-testid="counter"
                    className="text-6xl font-bold text-center my-10"
                >
                    {count}
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setCount(c => c - 1)}
                        className="flex-1 rounded-lg bg-slate-700
                       px-4 py-3 hover:bg-slate-600"
                    >
                        Decrease
                    </button>

                    <button
                        onClick={() => setCount(c => c + 1)}
                        className="flex-1 rounded-lg bg-blue-600
                       px-4 py-3 hover:bg-blue-500"
                    >
                        Increase
                    </button>
                </div>

                <button
                    onClick={() => setCount(0)}
                    className="w-full mt-3 rounded-lg border
                     border-slate-700 py-3
                     hover:bg-slate-800"
                >
                    Reset
                </button>
            </section>
        </main>
    );
}
