import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export const revalidate = 60; // Revalida a cada 60 segundos no componente

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 60, // Revalida a cada 60 segundos na requisição
    },
  });

  const data: ResponseProps = await response.json();

  async function handleFetchPosts() {
    "use server";

    console.log("CLICOUUUU");
  }

  async function handleSeachUsers(formData: FormData) {
    "use server";

    const userId = formData.get("userId");
    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: ResponseProps = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Todos os posts</h1>

      <button
        onClick={handleFetchPosts}
        className="bg-blue-500 text-white p-2 rounded-md my-5 mx-auto block cursor-pointer"
      >
        Buscar os posts
      </button>

      <form
        className="flex flex-col gap-4 mx-auto w-1/2"
        action={handleSeachUsers}
      >
        <input
          type="text"
          placeholder="ID do usuário"
          className="border-2 border-gray-300 p-2 rounded-md w-full mb-4"
          name="userId"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md mb-4 cursor-pointer"
          type="submit"
        >
          Captar usuário
        </button>
      </form>

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post: any, index: number) => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md shadow-md">
            <p className="text-sm text-gray-500">Post #{index + 1}</p>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500">
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
