import Element from "./Element";

function Backend() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full"> 
            <Element>C#</Element>
            <Element>ASP.NET Core</Element>
            <Element>Entity Framework Core</Element>
        </div>
    );
}

export default Backend;