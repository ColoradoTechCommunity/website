import Image from "next/image"

import { CenteredContent } from "./CenteredContent"
import joinUsOnDiscord from "../public/join-us-on-discord.png"

export const DiscordButton = () => (
  <CenteredContent>
    <a
      href="https://discord.gg/coloradotechcommunity"
      rel="noopener noreferrer"
    >
      <Image src={joinUsOnDiscord} alt="Join us on Discord" width={250} />
    </a>
  </CenteredContent>
)
