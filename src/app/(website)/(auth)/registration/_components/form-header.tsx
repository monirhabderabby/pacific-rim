interface Props {
  label: string;
  paragraph: string;
  title: string;
}

const FormHeader = ({ label, paragraph, title }: Props) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-[36px] font-semibold text-gradient !leading-[43px] mb-2">
          {label}
        </h1>
        <p className="text-[12px] text-[#6D6D6D] font-normal">{paragraph}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-[25px] lg:text-[30px] font-medium text-[#000000] mb-[32px]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default FormHeader;
