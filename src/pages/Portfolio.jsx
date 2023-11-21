import Project from '../components/Project'

export default function PortfolioPage() {
    return (
        <div>
            <Project 
                key={1} 
                appLink="https://anthony-gg.github.io/event-forecaster/"
                githubLink="https://github.com/Anthony-GG/event-forecaster"
                appImg="https://github.com/Anthony-GG/event-forecaster/raw/main/assets/images/event-forecaster-main.png"
                appDesc="Event Forecaster (Javascript)"
            />
        </div>
    )
}