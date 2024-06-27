import Link from "next/link"

export default function posts(){
    const postId = 1;
    return (
        <div>
            <h1>Posts</h1>
            <p>description of the post</p>
            <Link href={`posts/${postId}/post-details`}>Read more</Link>
        </div>
    )
} 