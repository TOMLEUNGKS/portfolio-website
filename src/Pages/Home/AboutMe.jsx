export default function AboutMe(){
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/tom_about.png" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    {/* <p className="section--title"> About</p> */}
                    <h1 className="skills--section--heading">About Me</h1>
                    <p className="hero--section-description">
                        I love challenges, and I keep learning.
                    </p>
                    <p className="hero--section-description">
                        To me, learning new things and solving problems bring me genuine joy.
                    </p>
                    <p className="hero--section-description">
                        Since graduation, I have been working in the IT industry for 6 years, with a focus on software development and test automation.
                    </p>
                    <p className="hero--section-description">
                        I completed a Master in Advanced Information Systems, where I studie a range of computer science topics.
                    </p>
                    <p className="hero--section-description">
                        Currently, I am based in Toronto, Canada (where I tried snowboarding for the very first time!)
                    </p>
                </div>
            </div>
        </section>
    )
}