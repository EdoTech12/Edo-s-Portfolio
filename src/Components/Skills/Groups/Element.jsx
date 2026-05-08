import { Play } from "lucide-react";

function Element({ children }) {
    return ( 
        <div className="flex gap-2 text-blue-200 w-full min-w-0">
            <Play className="text-cyan-300 w-4 shrink-0"/>
            <span className="wrap-break-word min-w-0">{children}</span>
        </div>
    );
}

export default Element;