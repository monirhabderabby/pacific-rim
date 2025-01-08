export interface CommentCard {
    id: number;
    date: string;
    author: string;
    content: string;
    avatarUrl: string;
};

export interface BlogsCardType {
    CommentCard: CommentCard;
}