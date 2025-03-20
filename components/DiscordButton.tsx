import Image from "next/image"

import { CenteredContent } from "./CenteredContent"
import joinUsOnDiscord from "../public/join-us-on-discord.png"

// TODO restore "https://discord.gg/coloradotechcommunity"
// here, in theme.config.tsx, and in _meta.json
export const DiscordButton = () => (
  <CenteredContent>
    <a
      href="https://discord.gg/8hKz737NwT"
      rel="noopener noreferrer"
    >
      <Image src={joinUsOnDiscord} alt="Join us on Discord" width={250} />
    </a>
  </CenteredContent>
)
