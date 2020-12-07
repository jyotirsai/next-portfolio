import Head from "next/head";
import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import styles from "../../styles/Posts.module.css";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import TitleBlock from "../../components/TitleBlock";
import Header from "../../components/Header";
import AllComponents from "../../components/AllComponents";

const components = AllComponents;

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <div className={styles.container}>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Header />
      <div className={styles.article}>
        <TitleBlock
          title={frontMatter.title}
          author={frontMatter.author}
          date={frontMatter.date}
        />

        <div className={styles.articleMain}>{content}</div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
