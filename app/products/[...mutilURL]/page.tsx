const MutilPage = ({ params }: { params: { mutilURL: string[] } }) => {
  console.log("paramURL", params.mutilURL);

  return <div>Mutil Page</div>;
};

export default MutilPage;
