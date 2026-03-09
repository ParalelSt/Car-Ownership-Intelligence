import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/schemas/forgotPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col w-80 p-3 h-full">
      <Card>
        <form
          className="flex flex-col h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Card.Header>
            <h2 className="heading-xl font-bold">Forgot Password</h2>
          </Card.Header>
          <Card.Content>
            <Input
              labelClassName="heading-base font-semibold"
              label="Enter your email address"
              labelColor="text-text-primary"
              type="email"
              icon={<EnvelopeIcon size={24} className="text-text-muted" />}
              placeholder="Enter your current password"
              error={errors.email?.message}
              {...register("email")}
            />
            <Button
              className="mt-5 h-10 text-base"
              buttonVariant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Send Reset Link
            </Button>
          </Card.Content>
          <Card.Footer>
            <span className="block py-1 w-full card-text-sm text-text-secondary text-center">
              <Link className="ml-px link" to={"/login"}>
                Back to login
              </Link>
            </span>
          </Card.Footer>
        </form>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
