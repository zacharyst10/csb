import Container from "@/components/Container";
import getPosts from "@/lib/get-posts";

export default async function About() {
  let posts = await getPosts();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Container>
      <div>
        <p className=" text-3xl">Posts</p>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-md p-4"
            >
              <p className="text-xl font-bold">{post.title}</p>
              <p className="text-lg">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
