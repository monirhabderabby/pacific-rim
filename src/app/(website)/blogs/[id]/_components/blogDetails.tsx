import { Calendar, Dot, Eye, MessageSquareMore, UserRound } from 'lucide-react';
import Image from 'next/image'
import React from 'react';


function BlogDetails() {
    return (
        <div>
            <article className="mb-8 bg-primary-light rounded-lg">
                <div className='overflow-hidden'>
                <Image
                    src="/assets/blogs/blogs.png"
                    alt="Cannabis buds"
                    width={770}
                    height={440}
                    className="w-full h-[320px] lg:w-[770px] lg:h-[440px] rounded-t-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 duration-300"
                />
                </div>
                <div className='p-4'>
                    <h2 className="text-[28px] leading-[33.6px] font-semibold text-[#2A6C2D] mb-4">Germany &#39;s Pioneering Cannabis Legislation: Setting a Precedent for the EU</h2>
                    <div className="flex gap-5 flex-wrap text-[#444444] font-[16px] leading-[19.2px] mb-4">
                        <div className='flex items-center gap-1'>
                            <span><Calendar className='w-[20px] h-[20px]' /></span>
                            <span className='font-[16px] leading-[19.2px]'>01 Nov, 2025</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <UserRound className='w-[20px] h-[20px]' />
                            <span className='font-[16px] leading-[19.2px]'>By Admin</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageSquareMore className='w-[20px] h-[20px]' />
                            <span className='font-[16px] leading-[19.2px]'>55 Comments</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Eye className='w-[20px] h-[20px]' />
                            <span className='font-[16px] leading-[19.2px]' >95 Views</span>
                        </div>
                    </div>
                    <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                        Germany is on the brink of introducing progressive cannabis laws that could not only
                        revolutionize its national industry but also set a trend across the European Union. As the largest
                        economy in the EU, Germany&#39;s legislative movements carry significant weight. This article
                        explores the new cannabis laws in Germany, the potential impacts on other EU countries, and
                        the impacts on the cannabis industry both within Germany and throughout the EU.
                    </p>
                    <h3 className="text-[20px] font-semibold leading-[24px] mb-2 text-[#3D3D3D]">Overview of Germany&#39;s New Cannabis Laws</h3>
                    <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                        Germany is on the brink of introducing progressive cannabis laws that could not only
                        revolutionize its national industry but also set a trend across the European Union. As the largest
                        economy in the EU, Germany&#39;s legislative movements carry significant weight. This article
                        explores the new cannabis laws in Germany, the potential impacts on other EU countries, and
                        the impacts on the cannabis industry both within Germany and throughout the EU.
                    </p>
                    <h3 className="text-[20px] font-semibold leading-[24px] mb-2 text-[#3D3D3D]">Potential Impacts on the German Cannabis Industry</h3>
                    <div>
                        <div className='flex'>
                            <span><Dot className='w-[30px] h-[30px] mt-[-6px]' /></span>
                            <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                                <span className='font-medium'>Economic Opportunities: </span>The legalization is expected to create a booming industry in Germany. It will open up new business opportunities ranging from cultivation and distribution to retail and ancillary services. The establishment of a legal market could also generate substantial tax revenue and create thousands of jobs.
                            </p>
                        </div>
                        <div className='flex'>
                            <span><Dot className='w-[30px] h-[30px] mt-[-6px]' /></span>
                            <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                                <span className='font-medium'>Regulatory Framework: </span>The creation of a regulatory framework for the legal cannabis market involves setting standards for cultivation, product quality, and sales. This will likely encourage innovation and investment in the cannabis sector, including advancements in cannabis-related technology and product development.
                            </p>
                        </div>
                    </div>
                    <h3 className="text-[20px] font-semibold leading-[24px] mb-2 text-[#3D3D3D]">Influence on the European Union</h3>
                    <div>
                        <div className='flex'>
                            <span><Dot className='w-[30px] h-[30px] mt-[-6px]' /></span>
                            <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                                <span className='font-medium'>Setting a Precedent: </span>Setting a Precedent:As the largest economy in the EU, Germany’s move towards legalization could serve as a model for other European countries. The success or challenges of Germany’s approach will provide valuable lessons for other nations considering similar legislation.
                            </p>
                        </div>
                        <div className='flex'>
                            <span><Dot className='w-[30px] h-[30px] mt-[-6px]' /></span>
                            <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                                <span className='font-medium'>Harmonizing Regulations: </span>Germany&#39;s legalization may push for more harmonized cannabis regulations across the EU. This could facilitate easier trade and commerce of cannabis products within the union, helping to standardize quality and safety measures across member states.
                            </p>
                        </div>
                    </div>
                    <h3 className="text-[20px] font-semibold leading-[24px] mb-2 text-[#3D3D3D]">Broader Impacts on the EU Cannabis Industry</h3>
                    <div>
                        <div className='flex'>
                            <span><Dot className='w-[30px] h-[30px] mt-[-6px]' /></span>
                            <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                                <span className='font-medium'>Market Dynamics: </span>The introduction of a major legal market in Germany is likely to influence cannabis market dynamics throughout the EU. It could drive down prices due to increased competition and scale of production, potentially making cannabis more accessible.
                            </p>
                        </div>
                        <div className='flex'>
                            <span><Dot className='w-[30px] h-[30px] mt-[-6px]' /></span>
                            <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                                <span className='font-medium'>Investment Influx: </span>The legitimization of the cannabis market in Germany could attract significant investment not only domestically but from across the EU and globally. Investors looking for a stable and legally secure market will find Germany a compelling option, which could lead to increased capital flow into the European cannabis sector.
                            </p>
                        </div>
                        <div className='flex'>
                            <span><Dot className='w-[30px] h-[30px] mt-[-6px]' /></span>
                            <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                                <span className='font-medium'>Innovation and Research: </span> With Germany&#39;s strong focus on research and development, the legalization could spur significant advances in cannabis research. This research will be crucial in developing safer and more effective cannabis products and could lead the way for medical cannabis advancements as well.
                            </p>
                        </div>
                    </div>
                    <h3 className="text-[20px] font-semibold leading-[24px] mb-2 text-[#3D3D3D]">Conclusion</h3>
                    <p className="mb-4 text-base leading-[19.2px] font-normal text-[#444444]">
                        Germany&#39;s proposed cannabis legalization represents a pivotal shift in the country’s drug policy and has the potential to significantly impact the European cannabis landscape. By creating a regulated market, Germany not only aims to enhance public health and safety but also to stimulate economic growth and set a regulatory benchmark for Europe. The success of this initiative could encourage other EU countries to follow suit, potentially leading to a more unified approach to cannabis legislation across Europe. As this new era dawns, the effects will resonate far beyond Germany’s borders, potentially transforming the cannabis industry throughout the entire European Union.
                    </p>
                </div>
                {/* Add more sections as needed */}
            </article>
        </div>
    )
}

export default BlogDetails