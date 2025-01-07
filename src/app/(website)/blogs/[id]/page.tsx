const Page = ({ params }: { params: { id: string } }) => {
  return <div>Page: {params.id}</div>;
};

export default Page;
