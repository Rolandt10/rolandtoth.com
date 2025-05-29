import readingTime from "reading-time";

interface PostData {
  title: string;
  date: string;
  slug: string;
  [key: string]: any;
}

interface Post {
  body: string;
  data: PostData;
  [key: string]: any;
}

interface PostWithReadTime extends Post {
  readTime: number;
}

type GroupedPosts = Map<number, Post[]>;
type SortedGroupedPosts = [number, PostWithReadTime[][]][];

class PostsProcessor {
  constructor(private posts: Post[]) {}

  private addReadTimeToPosts(): void {
    this.posts = this.posts.map((post) => ({
      ...post,
      readTime: Math.round(readingTime(post.body).minutes),
    }));
  }

  private groupPostsByYear(): GroupedPosts {
    const postsGroupedByYear = new Map<number, Post[]>();

    this.posts.forEach((post) => {
      const year = new Date(post.data.date).getFullYear();
      if (!postsGroupedByYear.has(year)) {
        postsGroupedByYear.set(year, [post]);
      } else {
        postsGroupedByYear.get(year).push(post);
      }
    });

    return postsGroupedByYear;
  }

  private sortPostsByYearDescending(
    groupedPosts: GroupedPosts,
  ): SortedGroupedPosts {
    return Array.from(groupedPosts.entries()).sort((a, b) => b[0] - a[0]);
  }

  public processPosts(): SortedGroupedPosts {
    try {
      this.addReadTimeToPosts();
      const grouped = this.groupPostsByYear();
      return this.sortPostsByYearDescending(grouped);
    } catch (error) {
      console.error("Failed to process posts", error);
      throw new Error("Failed to process posts.");
    }
  }
}

export default PostsProcessor;
