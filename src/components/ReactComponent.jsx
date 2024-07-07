import { useEffect } from "react";

export function ReactComponent() {
    useEffect(() => {
        const spinner = document.querySelector(".spinner");
        if (spinner) spinner.remove();
    }, []);

    return <div>React content</div>;
}