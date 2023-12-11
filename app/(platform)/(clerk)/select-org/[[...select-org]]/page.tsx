import { OrganizationList } from "@clerk/nextjs";

function CreateOrganizationPage() {
  return (
    <OrganizationList
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}

export default CreateOrganizationPage;
