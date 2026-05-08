import Element from "./Element";

function Frontend() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4"> 
            <Element>HTML</Element>
            <Element>CSS</Element>
            <Element>JavaScript</Element>
            <Element>React.js</Element>
            <Element>Tailwind CSS</Element>
            <Element>Bootstrap 5</Element>
        </div>
    );
}

export default Frontend;