export type WorkspaceTab = "playground" | "betterstack";

type WorkspaceTabsProps = {
    activeTab: WorkspaceTab;
    onTabChange: (tab: WorkspaceTab) => void;
};

const tabs: {id: WorkspaceTab; label: string}[] = [
    {id: "playground", label: "Hello World"},
    {id: "betterstack", label: "Better Stack Test"},
];

export default function WorkspaceTabs({activeTab, onTabChange}: WorkspaceTabsProps) {
    return (
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
                    onClick={() => onTabChange(tab.id)}
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
    );
}
