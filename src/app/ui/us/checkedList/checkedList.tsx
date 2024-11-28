import { FaCheckCircle } from "react-icons/fa";

const CheckedList = ({ description }: { description: string }) => {
  return (
    <div className="flex lg:gap-10 gap-5 items-center lg:px-5 mb-5">
      <div>
        <FaCheckCircle size={40} />
      </div>

      <p className="text-lg tracking-widest leading-8">{description}</p>
    </div>
  );
};

export default CheckedList;
