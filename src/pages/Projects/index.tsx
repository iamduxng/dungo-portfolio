import { PROJECTS } from '~/utils/data'
import Headline from '~/components/Common/Headline'
import ProjectItem from '~/components/Projects/ProjectItem'

import styles from './Projects.module.css'

function Projects() {
  return (
    <div>
      <Headline classes="text-center">Projects</Headline>
      <div className="mx-auto max-w-screen-sm text-center">
        Discover all the projects I have been working on.
      </div>

      <div className={styles.projectList}>
        {PROJECTS.map((project, idx) => (
          <ProjectItem key={`project-${idx}`} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
