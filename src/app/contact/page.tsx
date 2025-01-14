export default function page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="flex flex-col items-start justify-center space-y-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="w-1/2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ut
          minima deserunt natus, laboriosam voluptates eum iure quasi nobis
          delectus adipisci odio et animi excepturi cum eius, similique
          consequuntur eveniet.
        </p>
        <form className="flex w-1/2 flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md border border-gray-300 p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-md border border-gray-300 p-2"
          />
          <textarea
            placeholder="Message"
            className="rounded-md border border-gray-300 p-2"
          ></textarea>
          <button className="rounded-md bg-gray-600 p-2 text-white">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
