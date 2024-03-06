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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                        officiis sit debitis omnis harum sed veniam quasi dicta accusamus
                        recusandae?
                    </p>
                </div>
            </div>
        </section>
    )
}