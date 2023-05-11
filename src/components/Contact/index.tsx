import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import Headline from '~/components/Common/Headline'
import Button from '~/components/Common/Button'
import { IconGithub, IconGmail, IconLinkedin } from '~/components/Icons'

import styles from './Contact.module.css'

type Props = {
  classes: string
}

function Contact({ classes }: Props) {
  return (
    <div id="contact" className={`${styles.contact} ${classes}`}>
      <div className={styles.contactContent}>
        <div className="flex flex-col justify-center">
          <Headline classes="text-white">Contact Me</Headline>
          <div className="mb-12 text-lg text-white">
            Contact me through Gmail, Linkedin and Github.
          </div>
          <div className={styles.contactForm}>
            <Button
              as="a"
              href="mailto:ngoducdung95@gmail.com"
              className={styles.gmail}
            >
              <div>
                <IconGmail />{' '}
              </div>
              <span className="ml-4">E-mail</span>
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/ducdungngo"
              className={styles.linkedin}
              target="blank"
            >
              <div>
                <IconLinkedin />{' '}
              </div>
              <span className="ml-4">Linkedin</span>
            </Button>
            <Button
              as="a"
              href="https://github.com/iamduxng"
              className={styles.github}
              target="blank"
            >
              <div>
                <IconGithub />{' '}
              </div>
              <span className="ml-4">Github</span>
            </Button>
          </div>
        </div>
        <Animate
          type={ANIMATION_TYPE.FROM_RIGHT}
          classes="flex items-center opacity-0"
        >
          <div className={styles.contactMemoji}>
            <img src="memojis/contact.png" />
          </div>
        </Animate>
      </div>
    </div>
  )
}

export default Contact
