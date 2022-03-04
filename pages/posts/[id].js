import Layout from "../../components/layout";
import {useRouter} from "next/router";

export default function Post({data}){
    return(
        <Layout>
            <div>
                <h1>Post</h1>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context){
    const {id} = context.query;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data=>data.json());
    return{
        props:{
            data
        }
    }
}
