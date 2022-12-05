import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head"

export default function Dashboard(){
    return(
     <>
     <Head>
      <title>Painel - Sujeito Pizza</title>
      </Head>
      <div>
        <h1>painel</h1>
      </div>
      </>
    )
  }

  export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
      props: {}
    }
  })