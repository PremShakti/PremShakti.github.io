import React from 'react'
import GitHubCalendar from 'react-github-calendar'
const GitHub = () => {
  return (
    <div>

        <a href="https://git.io/streak-stats" target="_blank">
            <img
              id="github-stats-card"
              src="https://github-readme-streak-stats.herokuapp.com?user=PremShakti&theme=vision-friendly-dark"
              alt="GitHub Streak"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            />
          </a>
          <a href="https://git.io/streak-stats" target="_blank">
            <img
              id="github-streak-stats"
              src="https://github-readme-stats.vercel.app/api?username=PremShakti&show_icons=true&theme=vision-friendly-dark"
              alt="GitHub Streak"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            />
          </a>
        
     
        {/*  Graph */}
        <a href="https://git.io/streak-stats" target="_blank">
          <img
            id="github-top-langs"
            src="https://github-readme-activity-graph.vercel.app/graph?username=PremShakti&point=ffb000&title_color=ffb000&layout=compact&height=450&radius=10&theme=high-contrast"
            alt="GitHub Streak"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              width: "92%",
              marginBottom: "20px",
            }}
          />
        </a>
        {/* Most Language */}
        <a href="https://git.io/streak-stats" target="_blank">
          <img
            id="github-top-langs"
            // src="https://github-readme-stats.vercel.app/api/top-langs/?username=PremShakti&layout=compact&theme=dark"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=PremShakti&layout=compact&theme=vision-friendly-dark"
            alt="GitHub Streak"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          />
        </a>
      


    </div>
  )
}

export default GitHub
