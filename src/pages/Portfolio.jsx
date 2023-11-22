import Project from '../components/Project'

export default function PortfolioPage() {
    return (
        <div>
            <Project 
                key={1} 
                appLink="https://anthony-gg.github.io/event-forecaster/"
                githubLink="https://github.com/Anthony-GG/event-forecaster"
                appImg="https://github.com/Anthony-GG/event-forecaster/raw/main/assets/images/event-forecaster-main.png"
                appDesc="Event Forecaster (Front-End)"
            />
            <Project 
                key={2} 
                appLink="https://media.discordapp.net/attachments/424058611107364867/1176400725996216391/chatstrology.png?ex=656ebb8d&is=655c468d&hm=33bd2a054d01e54ec26eb12ba60549a7820f61d901c63edb19d6282ef0c9f19b&=&width=1202&height=676"
                githubLink="https://github.com/GameCatCam/Astrology-Board"
                appImg="../src/assets/chatstrology.png"
                appDesc="Chatstrology (Full-Stack)"
            />
            <Project 
                key={3} 
                appLink="https://glacial-refuge-64830-5b26cd1a184a.herokuapp.com"
                githubLink="https://github.com/GameCatCam/MVC-Tech-Blog-Challenge"
                appImg="https://media.discordapp.net/attachments/424058611107364867/1176696086052741160/download_1.png?ex=656fcea0&is=655d59a0&hm=99fc7c600e799c47f257e4dc0d586436f8b8ee0c370d61702d3752fec5d3eb3a&=&format=webp&width=845&height=676"
                appDesc="Tech Blog (Full-Stack)"
            />
            <Project 
                key={4} 
                appLink="https://gamecatcam.github.io/coding-quiz-challenge/"
                githubLink="https://github.com/GameCatCam/coding-quiz-challenge"
                appImg="https://github.com/GameCatCam/coding-quiz-challenge/raw/main/assets/screenshot.png"
                appDesc="Quiz Challenge (Front-End)"
            />
            <Project 
                key={5} 
                appLink="https://github.com/GameCatCam/employee-info-tracker"
                githubLink="https://github.com/GameCatCam/employee-info-tracker"
                appImg="https://media.discordapp.net/attachments/424058611107364867/1176697781528829952/Untitled.png?ex=656fd035&is=655d5b35&hm=048b20c9ede7776e30c3758bdca6f1bc5d51a372b20fbb408faf741f804e9e5a&=&format=webp&width=1187&height=676"
                appDesc="Employee DB (Back-End)"
            />
            <Project 
                key={6} 
                appLink="/portfolio"
                githubLink="/portfolio"
                appImg="https://t3.ftcdn.net/jpg/06/16/17/88/360_F_616178830_rySDz4kA4m5l7tiWta1O0qLAFhFqw2eS.jpg"
                appDesc="TBD (Full-Stack)"
            />
        </div>
    )
}

// 