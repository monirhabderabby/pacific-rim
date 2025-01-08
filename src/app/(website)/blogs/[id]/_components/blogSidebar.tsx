import BlogsCards from '@/components/shared/cards/BlogsCards'
import { PopularBlogs } from '@/data/popularBlogs'
import React from 'react'

function BlogSidebar() {
    return (
        <div className="grid grid-cols-1 gap-6">
            {PopularBlogs.slice(0, 4).map(blog =>
                <BlogsCards key={blog.id} image={blog.image} title={blog.title} date={blog.date} author={blog.author} comments={0} href={blog.href} id={blog.id} />

            )}
        </div>
    )
}

export default BlogSidebar