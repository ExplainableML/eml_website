import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>EML Tübingen</title>
                    <meta name="description" content="Explainable Machine Learning Tübingen" />

                </Head>
                <body class="bg-gray-50">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument