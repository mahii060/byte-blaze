import { useLoaderData } from "react-router-dom";
import placeHolderImg from "../assets/404.svg"
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { id, cover_image, title, body_html, tags } = blog;
    console.log(blog);
    return (
        <div to={`/blog/${id}`} className="border p-2 rounded-lg  mx-auto group hover:no-underline focus:no-underline " >
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeHolderImg} />
            <div className="flex flex-wrap py-6 gap-2  border-gray-600">
                {tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className=" hover:underline ">#{tag}</a>)}
            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>

                <Markdown rehypePlugins={[rehypeRaw]} className="prose max-w-full overflow-x-auto break-words">{body_html}</Markdown>

            </div>
        </div >
    );
};

export default Content;