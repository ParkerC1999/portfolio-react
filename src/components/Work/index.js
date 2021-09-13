function Work() {
    return (
        <div>
            {/*My Work Section*/}
            <section id="my-work" className="my-work">
                <div className="section-title">
                    <h2>My Work</h2>
                </div>
                <div className="projects">
                    <a href="https://parkerc1999.github.io/runBuddy/">
                        <article className="main-project" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/hero-bg.jpg')` }}>
                            <div>Run Buddy</div>
                        </article>
                    </a>
                    <article className="minor-project">
                        <div className="row">
                            <a href="https://jsieler.github.io/Cinamac/">
                                <div className="minor1" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/Cinemac_screenshot.PNG')` }}>
                                    <p>Collab Project</p>
                                </div>
                            </a>
                            <a href="https://rate-my-rental.herokuapp.com/">
                                <div className="minor2" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/rmr.PNG')` }}>
                                    <p>Rate-My-Rental</p>
                                </div>
                            </a>
                        </div>
                        <div className="row">
                            <a href='#'>
                                <div className="minor3" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/calculator-image.jpg')` }}>
                                    <p>PlaceHolder3</p>
                                </div>
                            </a>
                            <a href='#'>
                                <div className="minor4" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/robot-wallpaper-62.jpg')` }}>
                                    <p>PlaceHolder4</p>
                                </div>
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Work