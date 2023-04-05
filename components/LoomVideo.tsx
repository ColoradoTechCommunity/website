type LoomVideoProps = {
  src: string
}

export const LoomVideo = ({ src }: LoomVideoProps) => (
  <div
    style={{
      position: "relative",
      paddingBottom: "64.98194945848375%",
      height: 0,
    }}
  >
    <iframe
      src={src}
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
)
