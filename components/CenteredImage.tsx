export const CenteredImage = ({
  src,
  animation,
}: {
  src: string;
  animation?: "grow-shrink";
}) => (
  <div
    className={animation}
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 30,
    }}
  >
    <img src={src} alt="Colorado Tech Community" />
  </div>
);
