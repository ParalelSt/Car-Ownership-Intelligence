import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import {
  registerSchema,
  type RegisterFormData,
} from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeIcon, LockKeyIcon, UserIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data: RegisterFormData) => {
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
            <h2 className="heading-xl font-bold">Register</h2>
          </Card.Header>
          <Card.Content>
            <Input
              labelClassName="heading-base font-semibold"
              label="Email"
              labelColor="text-text-primary"
              type="email"
              icon={<EnvelopeIcon size={24} className="text-text-muted" />}
              placeholder="Enter your email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              labelClassName="heading-base font-semibold"
              label="Username"
              labelColor="text-text-primary"
              type="text"
              icon={<UserIcon size={24} className="text-text-muted" />}
              placeholder="Enter your username"
              error={errors.username?.message}
              {...register("username")}
            />
            <Input
              labelClassName="heading-base font-semibold"
              label="Password"
              labelColor="text-text-primary"
              type="password"
              icon={<LockKeyIcon size={24} className="text-text-muted" />}
              placeholder="Enter your password"
              error={errors.password?.message}
              {...register("password")}
            />
            <Input
              labelClassName="heading-base font-semibold"
              label="Confirm Password"
              labelColor="text-text-primary"
              type="password"
              icon={<LockKeyIcon size={24} className="text-text-muted" />}
              placeholder="Enter your password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
            <Button
              className="my-5 h-10 text-base"
              buttonVariant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </Button>
          </Card.Content>
          <Card.Footer>
            <span className="block py-1 w-full card-text-sm text-text-secondary text-center">
              Already have an account?{" "}
              <Link className="ml-px link" to={"/login"}>
                Sign in
              </Link>
            </span>
          </Card.Footer>
        </form>
      </Card>
    </div>
  );
};

export default RegisterForm;
