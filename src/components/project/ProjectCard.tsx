import * as styleX from "@stylexjs/stylex"
import { tokens } from "../../tokens.stylex"
export type ProjectType = {
  title: string
  text: string
  link: string
}

type ProjectCardProps = {
  projectData: ProjectType
}

export const ProjectCard = ({ projectData }: ProjectCardProps) => {
  return (
    <div {...styleX.props(styles.base)}>
      <div>
        <a
          href={projectData.link}
          target="_blank"
          {...styleX.props(styles.title)}
        >
          {projectData.title}
        </a>
      </div>

      <div> {projectData.text}</div>
    </div>
  )
}

const styles = styleX.create({
  base: {
    minWidth: "300px",
    minHeight: "300px",
    width: "30%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: tokens.darkBlue2,
    color: tokens.offWhite,
    margin: "5px",
  },
  title: {
    fontWeight: "600",
    cursor: "pointer",
    color: tokens.offWhite,
    textDecorationLine: "none",
  },
})