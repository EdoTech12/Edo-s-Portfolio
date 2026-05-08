import Element from "./Element";

function Others() {
    return ( 
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4"> 
            <Element>SQL</Element>
            <Element>Supabase</Element>
            <Element>Git</Element>
            <Element>GitHub</Element>
            <Element>VS Code</Element>
        </div>
     );
}

export default Others;