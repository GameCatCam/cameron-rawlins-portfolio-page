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
            <Project 
                key={2} 
                appLink="https://media.discordapp.net/attachments/424058611107364867/1176400725996216391/chatstrology.png?ex=656ebb8d&is=655c468d&hm=33bd2a054d01e54ec26eb12ba60549a7820f61d901c63edb19d6282ef0c9f19b&=&width=1202&height=676"
                githubLink="https://github.com/GameCatCam/Astrology-Board"
                appImg="../src/assets/chatstrology.png"
                appDesc="Chatstrology (Handlebars/Express/MySql)"
            />
        </div>
    )
}