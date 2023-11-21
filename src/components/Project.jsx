/* eslint-disable react/prop-types */
export default function Project(props) {
    return (
        <div className="project-box">
            <div className="project-header">
                <a href={props.appLink}>
                    <img className="project-img" src="https://cdn-icons-png.flaticon.com/512/2541/2541988.png" />
                </a>
                <a href={props.githubLink}>
                    <img className="project-img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                </a>
            </div>
            <div className="project-deployed-img">
                <img src={props.appImg} />
                <p>{props.appDesc}</p>
            </div>
        </div>
    )
}