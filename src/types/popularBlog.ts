
export interface Blog {
    id: number;
    image: string;
    title: string;
    date: string;
    author: string;
    comments: number;
    href: string;
};

export interface BlogsCardType {
    Blog: Blog;
}