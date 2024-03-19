type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div>
      <h4 className="text-md font-semibold mb-2">
        <select
          className="p-2 border rounded-md w-full"
          value={selectedPrice}
          onChange={(e) =>
            onChange(e.target.value ? parseInt(e.target.value) : undefined)
          }
        >
          <option value="">Select Max Price</option>
          {[500, 1000, 2000, 3000, 5000].map((price) => (
            <option value={price}>{price}</option>
          ))}
        </select>
      </h4>
    </div>
  );
};

export default PriceFilter;
