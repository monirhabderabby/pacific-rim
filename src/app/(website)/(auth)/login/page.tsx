import { FormProvider } from "@/provider/form-provider";
import { LoginForm } from "../_components/forms/login-form";

const Page = () => {
  return (
    <div>
      <FormProvider>
        <LoginForm />
      </FormProvider>
    </div>
  );
};

export default Page;
