import Link from "next/link";

const Dbhead = () => {
  return (
    <>
      <h1 className="text-4xl font-bold undefined">Daytech Dashboard</h1>
      <div className="my-5">
        <Link href="/">
          <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500">
            Widgets
          </a>
        </Link>
        <Link href="/about">
          <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-gray-100">
            About
          </a>
        </Link>
      </div>
    </>
  );
};

export default Dbhead;
