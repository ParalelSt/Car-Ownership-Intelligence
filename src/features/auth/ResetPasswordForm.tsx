import BorderLine from "@/components/ui/BorderLIne";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/schemas/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockKeyIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  //Full of bugs, derived from ForgotPasswordForm

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
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
              label="Current Password"
              labelColor="text-text-primary"
              type="text"
              icon={<LockKeyIcon size={24} className="text-text-muted" />}
              placeholder="Enter your current password"
              error={errors.currentPassword?.message}
              {...register("currentPassword")}
            />
            <Input
              labelClassName="heading-base font-semibold"
              label="New Password"
              labelColor="text-text-primary"
              type="password"
              icon={<LockKeyIcon size={24} className="text-text-muted" />}
              placeholder="Enter your new password"
              error={errors.newPassword?.message}
              {...register("newPassword")}
            />
            <Input
              labelClassName="heading-base font-semibold"
              label="Confirm Password"
              labelColor="text-text-primary"
              type="password"
              icon={<LockKeyIcon size={24} className="text-text-muted" />}
              placeholder="Enter your new password"
              error={errors.confirmNewPassword?.message}
              {...register("confirmNewPassword")}
            />
            <Button
              className="my-5 h-10 text-base"
              buttonVariant="primary"
              type="submit"
            >
              Send Reset Link
            </Button>
          </Card.Content>
          <Card.Footer>
            <BorderLine />
            <span className="block py-1 w-full card-text-sm text-text-secondary text-center">
              <Link className="ml-px link" to={"/register"}>
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
