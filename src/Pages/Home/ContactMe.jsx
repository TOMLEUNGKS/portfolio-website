export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
                </p>            
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="text" className="contact--input text-md" name="email" id="email" required />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type="text" className="contact--input text-md" name="phone-number" id="phone-number" required />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select className="contact--input text-md" id="choose-topic">
                        <option value="">Select one...</option>
                        <option value="">Item 1</option>
                        <option value="">Item 2</option>
                        <option value="">Item 3</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea className="contact--input text-md" id="message" rows="8" placeholder="Type your message..." />
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    )
}