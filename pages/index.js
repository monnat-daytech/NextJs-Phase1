import "tailwindcss/tailwind.css";
import App from "../components/app";
import Dbhead from "../components/Indexs/dbhead";

const Index = () => {
  return (
    <body class="w-100 max-w-4xl mx-auto p-5 bg-gray-200">
      <Dbhead />
      <App />
    </body>
  );
};

export default Index;
