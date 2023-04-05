import React from "react"

type CenteredContentProps = {
  children: React.ReactNode
}

export const CenteredContent = ({ children }: CenteredContentProps) => (
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
)
