type InfoRowProps = {
  label: string;
  value: string | number;
};

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <div className="flex justify-between py-4 border-b text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-black text-right">
        {value}
      </span>
    </div>
  );
};

export default InfoRow;
