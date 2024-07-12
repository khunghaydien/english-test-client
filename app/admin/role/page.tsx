"use client";
import { CommonTable, TableHeaderColumn } from "@/components/common-table";
import { Role } from "@/gql/graphql";
import { useQuery } from "@apollo/client";
import { MdDelete } from "react-icons/md";
import { GET_ROLES } from "@/graphql/query/getRoles";

export const roleColumns: TableHeaderColumn[] = [
  {
    id: "id",
    align: "left",
    label: "Id",
    width: 400,
  },
  {
    id: "name",
    align: "left",
    label: "Name",
  },
];

function page() {
  const { data, refetch } = useQuery(GET_ROLES, {});
  const users = data?.getRoles.map((user: Role) => {
    return {
      ...user,
      action: (
        <>
          <MdDelete className="cursor-pointer" />
        </>
      ),
    };
  });

  return (
    <div className="w-full">
      <CommonTable rows={users} columns={roleColumns} />
    </div>
  );
}

export default page;
