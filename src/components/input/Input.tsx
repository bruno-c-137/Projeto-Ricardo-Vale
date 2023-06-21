interface InputProps {
  label?: string;
  type?: string;
  noborder?: boolean;
  input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}
export default function Input({ label, input, type, noborder }: InputProps) {
  return (
    <label className="flex flex-col text-black">
      {label && <span>{label}</span>}
      <input
        type={type}
        {...input}
        className={` ${
          !!noborder ? "" : "border border-[#9B9B9B]"
        } w-full rounded-full text-sm text-[#676767] bg-white outline-none py-3 px-4 ${
          input?.className || ""
        }`}
      />
    </label>
  );
}
