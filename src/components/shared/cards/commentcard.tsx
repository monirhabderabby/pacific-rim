import { CommentCard } from '@/types/commentCard';
import Image from 'next/image';
import React from 'react'

function Commentcard({ author, date, content, avatarUrl }: CommentCard) {
    return (
        <div className="flex py-2 gap-3 items-start w-full text-base">
            <Image
                loading="lazy"
                src={avatarUrl}
                alt={`${author}'s avatar`}
                className="object-contain shrink-0 w-9 rounded-full aspect-[0.9]"
            />
            <div className="flex flex-col grow shrink min-w-[240px] w-[739px] max-md:max-w-full">
                <div className="flex flex-wrap gap-1.5 items-start w-full font-medium leading-tight text-neutral-700 max-md:max-w-full">
                    <div>{author}</div>
                    <div>•</div>
                    <div className="text-sm text-neutral-400">{date}</div>
                </div>
                <div className="mt-2 leading-5 text-neutral-400 max-md:max-w-full">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Commentcard