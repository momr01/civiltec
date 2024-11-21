import { FaCheckCircle } from "react-icons/fa";

const CheckedList = ({ description }: { description: string }) => {
  return (
    <div className="flex gap-10 items-center px-5 mb-5">
      <div>
        <FaCheckCircle size={40} />
      </div>

      <p className="text-lg tracking-widest leading-8">{description}</p>
    </div>
  );
};

export default CheckedList;
