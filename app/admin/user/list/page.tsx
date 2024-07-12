"use client";
import { CommonTable, TableHeaderColumn } from "@/components/common-table";
import { toast } from "@/components/ui/use-toast";
import { User } from "@/gql/graphql";
import { DELETE_USER } from "@/graphql/mutation/user";
import { GET_USERS } from "@/graphql/query/getUsers";
import { useMutation, useQuery } from "@apollo/client";
import { MdDelete } from "react-icons/md";
import ModalUserDetail from "../_component/modal-profile";
import { Button } from "@/components/ui/button";

export const invoicesColumns: TableHeaderColumn[] = [
  {
    id: "id",
    align: "left",
    label: "Id",
    width: 400,
  },
  {
    id: "image",
    align: "left",
    label: "Avatar",
  },
  {
    id: "fullname",
    align: "left",
    label: "Fullname",
  },
  {
    id: "email",
    align: "left",
    label: "Email",
  },
  {
    id: "action",
    align: "center",
    label: "Action",
    width: 350,
  },
];

function page() {
  const { data, refetch } = useQuery(GET_USERS, {});
  const [deleteUser] = useMutation(DELETE_USER);
  const users = data?.getUsers.map((user: User) => {
    const handleDeleteUser = async (id: string) => {
      try {
        const result = await deleteUser({
          variables: { id: id.toString() },
        });
        toast({
          title: "Delete User",
          description: `User ${result.data.deleteUser.fullname} deleted successfully.`,
          variant: "success",
        });
        await refetch();
      } catch (error) {}
    };
    return {
      ...user,
      action: (
        <div className="flex gap-3">
          <ModalUserDetail type="update" />
          <Button
            variant={"outline"}
            onClick={() => handleDeleteUser(user.id)}
            className="flex gap-2 items-center"
          >
            <MdDelete />
            Delete user
          </Button>
        </div>
      ),
    };
  });

  return (
    <div className="w-full">
      <CommonTable rows={users} columns={invoicesColumns} />
    </div>
  );
}

export default page;
