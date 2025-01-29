import GlamById from "../../../../views/glam-id";


export default async function GilamById({ params }) {
  const { id } = await params;
  return (
    <>
      <GlamById id={id} />
    </>
  );
}
