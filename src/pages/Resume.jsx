export default function ResumePage() {
    return (
        <div>
            <div className="resume">
                <h2>Resume</h2>
                <a className="resume-dl" href="../src/assets/Cameron-Rawlins.pdf" download="cameron-resume.pdf">
                    A download link to my resume!
                </a>
            </div>
            <div className="resume">
                <div>
                    <h2>Front-End Skills:</h2>
                    <ul>
                        <li className="resume-list">HTML</li>
                        <li className="resume-list">CSS</li>
                        <li className="resume-list">Javascript (DOM Traversal)</li>
                        <li className="resume-list">Handlebars</li>
                        <li className="resume-list">React</li>
                    </ul>
                </div>
                <div>
                    <h2>Back-End Skills:</h2>
                    <ul>
                        <li className="resume-list">Express</li>
                        <li className="resume-list">MySQL</li>
                        <li className="resume-list">MongoDB</li>
                        <li className="resume-list">Node</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}