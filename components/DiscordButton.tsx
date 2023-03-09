import { CenteredContent } from "./CenteredContent";

export const DiscordButton = () => (
  <CenteredContent>
    <img
      style={{ height: 60, boxShadow: "10px black", cursor: "pointer" }}
      onClick={() => {
        window.open("https://discord.gg/denver-devs");
      }}
      src="https://i0.wp.com/peakofserenity.com/wp-content/uploads/2018/12/wZgPoYaVlU0gAAAABJRU5ErkJggg.png?ssl=1"
      alt=""
    />
  </CenteredContent>
);
