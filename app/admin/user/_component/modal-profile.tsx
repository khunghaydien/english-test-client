import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormGroup } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/userStore";
import { useFormik } from "formik";
import React, { useMemo } from "react";
import { FaPen } from "react-icons/fa";
interface IModalProfile {
  type: "update" | "view" | "create";
}
const titleProfile = {
  update: "Edit your profile",
  view: "View your profile",
  create: "Create your profile",
};
function ModalProfile({ type }: IModalProfile) {
  const { updatedAt, createdAt, password, id, fullname, email, bio, image } =
    useUserStore((state) => state);

  const title = useMemo(() => {
    return titleProfile[type];
  }, [type]);

  const formik = useFormik({
    initialValues: {
      updatedAt,
      createdAt,
      password,
      id,
      fullname,
      email,
      bio,
      image,
    },
    onSubmit: () => {},
  });

  const { values, touched, errors, setFieldValue } = formik;
  return (
    <Dialog>
      <DialogTrigger>
        <FaPen className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="min-w-[900px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex gap-6 items-center mt-3">
          <Avatar>
            <AvatarImage src={values.image || ""} alt={values.fullname} />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex gap-3 items-center">
              <Button>Update Avatar</Button>
              <Button variant={"outline"}>Remove Avatar</Button>
            </div>
          </div>
        </div>
        <form action="">
          <FormGroup gap={24} top={12}>
            <Input
              required
              label="Fullname"
              placeholder="fullname"
              type="fullname"
              value={values.fullname}
              error={formik.touched.fullname && formik.touched.fullname}
              errorMessage={formik.errors.fullname}
              onChange={(e) => setFieldValue("fullname", e.target.value)}
            />
            <Input
              required
              label="Bio"
              placeholder="bio"
              type="bio"
              value={values.bio || ""}
              error={formik.touched.bio && formik.touched.bio}
              errorMessage={formik.errors.bio}
              onChange={(e) => setFieldValue("bio", e.target.value)}
            />
          </FormGroup>
          <FormGroup gap={24} top={24}>
            <Input
              required
              label="Email"
              placeholder="email"
              type="email"
              value={values.email}
              error={formik.touched.email && formik.touched.email}
              errorMessage={formik.errors.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <Input
              required
              label="Password"
              placeholder="password"
              type="password"
              value={values.password}
              error={formik.touched.password && formik.touched.password}
              errorMessage={formik.errors.password}
              onChange={(e) => setFieldValue("password", e.target.value)}
            />
          </FormGroup>
          <FormGroup gap={24} top={24}>
            <Input
              required
              label="Created At"
              placeholder="createdAt"
              type="createdAt"
              value={values.createdAt}
              error={Boolean(
                formik.touched.createdAt && formik.touched.createdAt
              )}
              errorMessage={formik.errors.createdAt?.toString()}
              onChange={(e) => setFieldValue("createdAt", e.target.value)}
            />
            <Input
              required
              label="Updated At"
              placeholder="updatedAt"
              type="updatedAt"
              value={values.updatedAt || ""}
              error={Boolean(
                formik.touched.updatedAt && formik.touched.updatedAt
              )}
              errorMessage={formik.errors.updatedAt?.toString()}
              onChange={(e) => setFieldValue("updatedAt", e.target.value)}
            />
          </FormGroup>
        </form>
        <DialogFooter>
          <div className="w-full flex items-center justify-end gap-3">
            <Button variant={"outline"}>Cancel</Button>
            <Button>Update</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalProfile;
