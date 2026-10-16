import {useState} from "react";

type PlaygroundPanelProps = {
    isActive: boolean;
};

export default function PlaygroundPanel({isActive}: PlaygroundPanelProps) {
    const [count, setCount] = useState(0);

    return (
        <section
            id="panel-playground"
            role="tabpanel"
            aria-labelledby="tab-playground"
            hidden={!isActive}
        >
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                <h2 className="text-2xl font-bold">
                    Hello World!
                </h2>

                <p className="mt-2 text-slate-400">
                    React + TypeScript + Tailwind CSS
                </p>

                <div
                    data-testid="counter"
                    className="my-10 text-center text-6xl font-bold"
                >
                    {count}
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setCount((c) => c - 1)}
                        className="flex-1 rounded-lg bg-slate-700 px-4 py-3 hover:bg-slate-600"
                    >
                        Decrease
                    </button>

                    <button
                        onClick={() => setCount((c) => c + 1)}
                        className="flex-1 rounded-lg bg-blue-600 px-4 py-3 hover:bg-blue-500"
                    >
                        Increase
                    </button>
                </div>

                <button
                    onClick={() => setCount(0)}
                    className="mt-3 w-full rounded-lg border border-slate-700 py-3 hover:bg-slate-800"
                >
                    Reset
                </button>
            </div>
        </section>
    );
}
