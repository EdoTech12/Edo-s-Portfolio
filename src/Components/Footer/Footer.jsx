function Footer() {
    return ( 
        <section className="flex flex-col justify-center items-center p-14 text-md text-blue-200/80 gap-2">
            <span className="text-md text-blue-200/80">© 2026 Edoardo Tesser</span>
            <div className="flex gap-2">
                <a href="https://github.com/EdoTech12"> GitHub </a>
                <span> · </span>
                <a href="mailto:edoardotesser.work@gmail.com">edoardotesser.work@gmail.com</a>
            </div>
        </section>
    );
}

export default Footer;