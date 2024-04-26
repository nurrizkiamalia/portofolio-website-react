export default function Form(){
    return(
        <>
            <div className="form-container container">
                <div className="form-box">
                    <img src="src/assets/hero-img.png" />
                    <div className="contact-detail">
                        <p className="para-md">Contact Details</p>
                        <a className="para-lg">ayush.barnwal@brightscout.com</a>
                        <a className="para-lg">
                        +91 8651447521
                        </a>
                    </div>

                    <div className="contact-detail">
                        <p className="para-md">social</p>
                        <a className="para-lg">LinkedIn</a>
                        <a className="para-lg">
                        Instagram
                        </a>
                        <a className="para-lg">
                        Twitter
                        </a>
                        <a className="para-lg">
                        Webflow
                        </a>
                        <a className="para-lg">
                        Figma
                        </a>
                    </div>
                </div>
                <div className="form-box">
                    <h2 className="heading2">Let’s build something cool together</h2>
                    
                    <div className="input-field para-md">
                        <label>Name</label>
                        <input type="text" placeholder="James Robert" />
                    </div>
                    
                    <div className="input-field para-md">
                        <label>Email</label>
                        <input type="email" placeholder="ayush.barnwal@brightscout.com" />
                    </div>
                    
                    <div className="input-field para-md">
                        <label>Subject</label>
                        <input type="text" placeholder="For web design work Enquire" />
                    </div>
                    <div className="input-field para-md">
                        <label>Message</label>
                        <textarea placeholder="Type your message"></textarea>
                    </div>
                    
                    <input type="submit" value="Submit"/>
                </div>
            </div>
        </>
    )
}