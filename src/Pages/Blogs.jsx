import { Link, useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import placeHolderImg from "../assets/404.svg"
import Loader from "../components/Loader";

const Blogs = () => {
    const blogs = useLoaderData();
    const navigation = useNavigation()

    if (navigation.state === 'loading') return <Loader />
    return (
        <section className=" py-6 ">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link to={`/blog/${blogs[0].id}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                    <img src={blogs[0].cover_image || placeHolderImg} alt={blogs[0].title} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                        <span className="text-xs">February 19, 2021</span>
                        <p>{blogs[0].description}</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.slice(1, 19).map(blog => <BlogCard key={blog.id}
                            deletable={false} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;