
const Card = ({ children }) => {
  return (
    <div class="md:inner md:w-1/2 pb-4 md:pr-4">
      <div class="p-5 border-1 bg-white rounded-2xl relative undefined">
        {children}
      </div>
      <div class="mt-6 "></div>
    </div>
  );
};

export default Card;
