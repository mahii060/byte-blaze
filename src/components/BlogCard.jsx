/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeHolderImg from "../assets/404.svg"

const BlogCard = ({ blog }) => {
    const { id, cover_image, description, published_at, title } = blog;
    return (
        <Link to={`/blog/${id}`} className="max-w-sm transition border-2 border-primary hover:border-secondary rounded-lg hover:scale-105 mx-auto group hover:no-underline focus:no-underline " >
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeHolderImg} alt={title} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link >
    );
};

export default BlogCard;