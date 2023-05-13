import Animate, { ANIMATION_TYPE } from '~/components/Animate'

import styles from './ProjectItem.module.css'

export interface Project {
  from: string
  to: string
  name: string
  techStack: string
  description: string
}

type Props = {
  project: Project
}

function ProjectItem({ project }: Props) {
  return (
    <div className={styles.project}>
      <Animate type={ANIMATION_TYPE.POP_IN} classes={styles.projectContent}>
        <div className="text-sky-700">
          {project.from} - {project.to}
        </div>
        <div className="text-xl font-bold text-sky-900">{project.name}</div>
        <div className="font-bold text-sky-700">
          <span className="font-normal underline">Tech stack:</span>{' '}
          {project.techStack}
        </div>
        <div>{project.description}</div>
      </Animate>
    </div>
  )
}

export default ProjectItem
