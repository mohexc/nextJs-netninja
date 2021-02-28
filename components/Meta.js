import Head from 'next/head'

const Meta = ({ title, content }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keyword" content={content} />
    </Head>
  )
}

export default Meta
