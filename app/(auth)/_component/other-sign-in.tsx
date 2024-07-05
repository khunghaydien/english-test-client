import { Button } from "@/components/ui/button";
import { FormGroup } from "@/components/ui/form";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const OtherSignIn = () => {
  return (
    <>
      <div className="w-full max-w-[500px] mt-[100px]">
        <FormGroup>
          <Button
            size={"xl"}
            variant={"destructive"}
            className="w-full text-[17px] font-semibold text-white py-3 rounded-sm flex items-center gap-6"
          >
            <FaGoogle></FaGoogle> Sign In with Google
          </Button>
        </FormGroup>
        <FormGroup top={12}>
          <Button
            size={"xl"}
            variant={"blue"}
            className="w-full text-[17px] font-semibold text-white py-3 rounded-sm flex items-center gap-6"
          >
            <FaFacebook></FaFacebook> Sign In with Facebook
          </Button>
        </FormGroup>
        <FormGroup top={12}>
          <Button
            size={"xl"}
            variant={"destructive"}
            className="w-full text-[17px] font-semibold text-white py-3 rounded-sm flex items-center gap-6"
          >
            <FaGoogle></FaGoogle> Sign In with Google
          </Button>
        </FormGroup>
        <FormGroup top={12}>
          <Button
            size={"xl"}
            variant={"blue"}
            className="w-full text-[17px] font-semibold text-white py-3 rounded-sm flex items-center gap-6"
          >
            <FaFacebook></FaFacebook> Sign In with Facebook
          </Button>
        </FormGroup>
      </div>
    </>
  );
};
export default OtherSignIn;
