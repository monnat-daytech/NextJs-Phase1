import Link from "next/link";

const Dbhead = () => {
  return (
    <>
      <h1 class="text-4xl font-bold undefined">Daytech Dashboard</h1>
      <div class="my-5">
        <Link href="/">
          <a class="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500">
            Hello
          </a>
        </Link>
        <Link href="/about">
          <a class="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-gray-100">
            Hello
          </a>
        </Link>
      </div>
    </>
  );
};

export default Dbhead;
