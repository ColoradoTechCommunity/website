export const CenteredContent = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 30,
    }}
  >
    {children}
  </div>
);
