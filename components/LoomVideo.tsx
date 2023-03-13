export const LoomVideo = ({ src }: { src: string }) => (
  <div
    style={{
      position: "relative",
      paddingBottom: "64.98194945848375%",
      height: 0,
    }}
  >
    <iframe
      src="https://www.loom.com/embed/6257c72f19824f62ba9dbce74ce3876e"
      //   frameborder="0"
      //   webkitallowfullscreen
      //   mozallowfullscreen
      //   allowfullscreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></iframe>
  </div>
);
