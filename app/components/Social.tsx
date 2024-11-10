export default function Social() {
    return (
        <section id="social-media-loc" className="socials-body">
            <div id="socials-wrap">
                <div id="socials-img" data-aos="flip-up">
                    <img src="./social-media-shadow.webp" />
                </div>
                <div className="social-item-wrap">
                    <div data-aos="zoom-in-down">
                        <a
                            target="_blank"
                            href="https://instagram.com/geeksforgeeks_ausc?igshid=MzRlODBiNWFlZA=="
                        >
                            <div className="social-item">
                                <i className="fa-fw fa-brands fa-instagram fa-2x" />
                                <span>Instagram</span>
                            </div>
                        </a>
                        <a
                            target="_blank"
                            href="https://chat.whatsapp.com/GGjbWe8br3q2OfKWObgxoO"
                        >
                            <div className="social-item">
                                <i className="fa-fw fa-brands fa-whatsapp fa-2x" />
                                <span>Whatsapp</span>
                            </div>
                        </a>
                        <a target="_blank" href="https://twitter.com/Gfg_ausc">
                            <div className="social-item">
                                <i className="fa-fw fa-brands fa-twitter fa-2x" />
                                <span>Twitter</span>
                            </div>
                        </a>
                    </div>
                    <div data-aos="zoom-in-up">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/company/geeksforgeeks-ausc/"
                        >
                            <div className="social-item">
                                <i className="fa-fw fa-brands fa-linkedin-in fa-2x" />
                                <span>LinkedIn</span>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.youtube.com">
                            <div className="social-item">
                                <i className="fa-fw fa-brands fa-youtube fa-2x" />
                                <span>YouTube</span>
                            </div>
                        </a>
                        <a target="_blank" href="https://linktr.ee">
                            <div className="social-item">
                                <i className="fa-fw fa-solid fa-tree fa-2x" />
                                <span>LinkTree</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}