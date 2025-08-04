import Image from "next/image"
import { useRouter } from "next/router"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import React from "react"

const githubUrl = "https://github.com/ColoradoTechCommunity/website/"
const siteName = "Colorado Tech Community"

const config: DocsThemeConfig = {
  // Global
  docsRepositoryBase: `${githubUrl}tree/main`,
  useNextSeoProps() {
    const { asPath } = useRouter()

    const titleTemplate = asPath === "/" ? siteName : `%s – ${siteName}`

    return { titleTemplate }
  },
  head() {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    const description = frontMatter.description || siteName
    const title = frontMatter.title
      ? `${frontMatter.title} – ${siteName}`
      : siteName
    const url = `https://coloradotech.community/${asPath}`

    return (
      <>
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <link rel="shortcut icon" type="image/jpg" href="/logo.ico" />
      </>
    )
  },
  primaryHue: 208,

  // Navbar
  logo: (
    <>
      <Image
        src="/logo.png"
        alt="Colorado Tech Community logo"
        width={50}
        height={50}
        style={{ marginRight: "10px" }}
      />
      <span>{siteName}</span>
    </>
  ),
  project: {
    link: githubUrl,
  },
  chat: {
    link: "https://discord.gg/KTKQAvK3rR",
  },
  search: {
    placeholder: "🔎 Search",
  },

  // TOC Sidebar
  toc: {
    title: "On this page",
  },

  // Footer
  footer: {
    text: <p>{siteName}</p>,
  },
}

export default config
