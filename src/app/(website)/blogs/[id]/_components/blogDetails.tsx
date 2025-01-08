import Image from 'next/image'
import React from 'react';


function BlogDetails() {
    return (
        <div>
            <article className="mb-8 bg-primary-light rounded-lg">
                <Image
                    src="/assets/blogs/blogs.png"
                    alt="Cannabis buds"
                    width={600}
                    height={400}
                    className="w-full h-auto mb-4 rounded-t-lg"
                />
                <div className='p-4'>
                    <h2 className="text-3xl font-bold text-green-700 mb-4">Germany &#39;s Pioneering Cannabis Legislation: Setting a Precedent for the EU</h2>
                    <div className="text-sm text-gray-600 mb-4">
                        <span>01 Nov, 2025</span> • <span>By Admin</span> • <span>55 Comments</span> • <span>95 Views</span>
                    </div>
                    <p className="mb-4 text-base text-[#444444]">
                        Germany is on the brink of introducing progressive cannabis laws that could not only
                        revolutionize its national industry but also set a trend across the European Union. As the largest
                        economy in the EU, Germany&#39;s legislative movements carry significant weight. This article
                        explores the new cannabis laws in Germany, the potential impacts on other EU countries, and
                        the impacts on the cannabis industry both within Germany and throughout the EU.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 text-[#3D3D3D]">Overview of Germany&#39;s New Cannabis Laws</h3>
                    <p className="mb-4 text-base text-[#444444]">
                        Germany is on the brink of introducing progressive cannabis laws that could not only
                        revolutionize its national industry but also set a trend across the European Union. As the largest
                        economy in the EU, Germany&#39;s legislative movements carry significant weight. This article
                        explores the new cannabis laws in Germany, the potential impacts on other EU countries, and
                        the impacts on the cannabis industry both within Germany and throughout the EU.
                    </p>
                </div>
                {/* Add more sections as needed */}
            </article>
        </div>
    )
}

export default BlogDetails