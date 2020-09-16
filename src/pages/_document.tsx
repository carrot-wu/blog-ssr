import React from 'react'
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

class BlogDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head title="carrotwu个人博客">
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <meta charSet='utf-8'/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default BlogDocument
