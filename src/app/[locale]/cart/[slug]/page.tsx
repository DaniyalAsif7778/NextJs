import { Metadata } from "next";

type Prop = {
  params: Promise<{ slug: string }>;
};

async function getData(slug: string) {
  return {
    title: `blog title is ${slug}`,
    description: `This blog is written for ${slug}`,
  };
}


export async function generateMetadata({params}:Prop):Promise<Metadata> {
    const {slug} = await params;
    const post = await getData(slug)
return  {
    title:post.title,
    description:post.description
}

}

export default async function post ({params}:Prop){
    const {slug } = await params;
    return (
        <>
        <h1>Blog Post : {slug}</h1>
        </>
    )
}