export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I am Tom</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Software Development</span>{""}
                        <br />
                        QA Automation
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        <br />  Quidem excepturi culpa quasi
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/tom_linkedin_color-removebg.png" alt="Hero Section" />
            </div>
        </section>
    )
    ;
}