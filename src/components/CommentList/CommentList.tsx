import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface Props {
  slug: string;
}

async function getCommentsForSlug(slug: string) {
  const commentCollection = collection(db, "comments", slug, "comments");
  const q = query(commentCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export default function CommentList({ slug }: Props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsForSlug(slug).then(setComments);
  }, [slug]);

  return (
    <div className="mt-8 space-y-6">
      {comments.length === 0 ? (
        <p className="text-sm text-gray-500">No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="rounded-lg border p-4">
            <div className="mb-2 flex items-center gap-2">
              <img
                src={comment.photoURL}
                alt={comment.displayName}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-semibold">
                {comment.displayName}
              </span>
              <span className="text-xs ml-auto text-gray-400">
                {comment.createdAt?.toDate?.().toLocaleString()}
              </span>
            </div>
            <p className="whitespace-pre-wrap text-sm">{comment.text}</p>
          </div>
        ))
      )}
    </div>
  );
}
