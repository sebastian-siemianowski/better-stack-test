import {useState} from "react";
import BetterStackPanel from "./components/BetterStackPanel";
import PlaygroundPanel from "./components/PlaygroundPanel";
import WorkspaceHeader from "./components/WorkspaceHeader";
import WorkspaceTabs, {type WorkspaceTab} from "./components/WorkspaceTabs";

export default function App() {
    const [activeTab, setActiveTab] = useState<WorkspaceTab>("playground");

    return (
        <main className="min-h-screen bg-slate-950 text-white p-6">
            <div className="mx-auto max-w-4xl">
                <WorkspaceHeader />
                <WorkspaceTabs activeTab={activeTab} onTabChange={setActiveTab} />
                <PlaygroundPanel isActive={activeTab === "playground"} />
                <BetterStackPanel isActive={activeTab === "betterstack"} />
            </div>
        </main>
    );
}
