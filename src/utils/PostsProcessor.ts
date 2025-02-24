import readingTime from "reading-time";

class PostsProcessor {
  private posts;

  constructor(posts) {
    this.posts = posts;
  }

  private addReadTimeToPosts() {
    this.posts = this.posts.map((post) => ({
      ...post,
      readTime: Math.round(readingTime(post.body).minutes),
    }));
  }

  private groupPostsByYear() {
    const postsGroupedByYear = new Map();

    this.posts.forEach((post) => {
      const year = new Date(post.data.date).getFullYear();
      if (!postsGroupedByYear.has(year)) {
        postsGroupedByYear.set(year, [post]);
      } else {
        postsGroupedByYear.get(year).push(post);
      }
    });

    this.posts = postsGroupedByYear;
  }

  private sortPostsByYearDescending() {
    this.posts = Array.from(this.posts.entries()).sort((a, b) => b[0] - a[0]);
  }

  public processPosts() {
    try {
      this.addReadTimeToPosts();
      this.groupPostsByYear();
      this.sortPostsByYearDescending();

      return this.posts;
    } catch (error) {
      console.error("Failed to process posts", error);
      throw new Error("Failed to process posts.");
    }
  }
}

export default PostsProcessor;
