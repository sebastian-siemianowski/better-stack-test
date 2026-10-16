import {useState} from "react";

type Tab = "playground" | "betterstack";

export default function App() {
    const [activeTab, setActiveTab] = useState<Tab>("playground");
    const [count, setCount] = useState(0);

    const tabs: { id: Tab; label: string }[] = [
        {id: "playground", label: "Hello World"},
        {id: "betterstack", label: "Better Stack Test"},
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-white p-6">
            <div className="mx-auto max-w-4xl">

                <header className="mb-8">
                    <p className="text-sm font-medium text-blue-400">
                        Rails + React Interview Workspace
                    </p>
                    <h1 className="mt-2 text-3xl font-bold">
                        Development Playground
                    </h1>
                </header>

                {/* Tab navigation */}
                <div
                    role="tablist"
                    aria-label="Workspace sections"
                    className="flex gap-2 border-b border-slate-800 mb-8"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            id={`tab-${tab.id}`}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                px-5 py-3 text-sm font-medium
                border-b-2 transition-colors
                ${
                                activeTab === tab.id
                                    ? "border-blue-500 text-blue-400"
                                    : "border-transparent text-slate-400 hover:text-white"
                            }
              `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Hello World tab */}
                <section
                    id="panel-playground"
                    role="tabpanel"
                    aria-labelledby="tab-playground"
                    hidden={activeTab !== "playground"}
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

                {/* Better Stack tab */}
                <section
                    id="panel-betterstack"
                    role="tabpanel"
                    aria-labelledby="tab-betterstack"
                    hidden={activeTab !== "betterstack"}
                >
                    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-12 text-center">
                        <div className="mb-4 text-4xl">{"</>"}</div>

                        <h2 className="text-2xl font-bold">
                            Better Stack Test
                        </h2>

                        <p className="mt-3 text-slate-400">
                            Your coding challenge workspace.
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Placeholder — implementation coming soon.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}
