export interface Comment {
  id: string;
  name: string;
  location?: string;
  content: string;
  date: string;
  upvotes: number;
  hasUpvoted?: boolean;
  replies?: Reply[];
  isReply?: boolean;
}

export interface Reply extends Omit<Comment, 'replies'> {
  parentId: string;
  isReply: true;
}

export interface NewComment {
  name: string;
  location?: string;
  content: string;
}