<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
  version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>rss feed</title>
        <meta charset="utf-8" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=0.85" />
        <link rel="stylesheet" type="text/css" href="/assets/styles/styles.css" />
        <link rel="icon" type="image/x-icon" href="/assets/images/favicon.png" />
      </head>

      <body>
        <main>
          <header>
            <div class="links">
              <ul>
                <li><a href="/">all</a></li>
                <li><a href="/posts">posts</a></li>
                <li><a href="/projects">projects</a></li>
                <li><a href="/weeknotes">weeknotes</a></li>
              </ul>
              <div class="icons">
                <a class="i" href="/contact" title="Contact" style="background-image: url('/assets/icons/contact.svg')"></a>
                <a class="i" href="/feed.xml" title="RSS" style="background-image: url('/assets/icons/rss.svg')"></a>
                <a class="i" href="/search" title="Search" style="background-image: url('/assets/icons/search.svg')"></a>
              </div>
            </div>
          </header>
          <article>
            <p>(this page is an rss feed actually)</p>
            <ul>
              <xsl:for-each select="/atom:feed/atom:entry">
                <li>
                  <a style="text-decoration: none">
                    <xsl:attribute name="href">
                      <xsl:value-of select="atom:link/@href" />
                    </xsl:attribute>
                    <xsl:value-of select="atom:title" />
                  </a>
                  <span style="opacity: 0.5">
                    (<xsl:value-of select="substring(atom:updated, 0, 11)"/>)
                  </span>
                </li>
              </xsl:for-each>
            </ul>
          </article>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
