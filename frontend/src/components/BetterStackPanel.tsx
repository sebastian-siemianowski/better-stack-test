type BetterStackPanelProps = {
    isActive: boolean;
};

export default function BetterStackPanel({isActive}: BetterStackPanelProps) {
    return (
        <section
            id="panel-betterstack"
            role="tabpanel"
            aria-labelledby="tab-betterstack"
            hidden={!isActive}
        >
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-12 text-center">
                <div className="mb-4 text-4xl">{"</>"}</div>

                <h2 className="text-2xl font-bold">
                    Better Stack Test
                </h2>

                <p className="mt-3 text-slate-400">
                    My workspace
                </p>

                <p className="mt-2 text-sm text-slate-500">
                    Placeholder for Implementation
                </p>
            </div>
        </section>
    );
}
