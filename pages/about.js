import Appabout from "../components/Indexs/appabout";
import Dbhead from "../components/Indexs/dbhead";
import "tailwindcss/tailwind.css";

const about = () => {
  return (
    <body class="w-100 max-w-4xl mx-auto p-5 bg-gray-200">
      <Dbhead />
      <Appabout/>
    </body>
  );
};

export default about;
