export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, welcome!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">I am Tom.</span>{""}
                        <br />
                        A Software Engineer.
                    </h1>
                    <p className="hero--section--description">
                        This website is built using React JS. 
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/coding_bg.png" alt="Hero Section" />
            </div>
        </section>
    )
    ;
}
