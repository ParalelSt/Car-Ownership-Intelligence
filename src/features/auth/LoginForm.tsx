import BorderLine from "@/components/ui/BorderLIne";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";
import { loginSchema, type LoginFormData } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeIcon, LockKeyIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    await login(data.email, data.password);
    navigate("/");
  };

  return (
    <div className="flex flex-col w-80 p-3 h-full">
      <Card>
        <form
          className="flex flex-col h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Card.Header>
            <h2 className="heading-xl font-bold">Login</h2>
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
              label="Password"
              labelColor="text-text-primary"
              type="password"
              icon={<LockKeyIcon size={24} className="text-text-muted" />}
              placeholder="Enter your password"
              error={errors.password?.message}
              {...register("password")}
            />
            <Button
              className="my-5 h-10 text-base"
              buttonVariant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </Button>
            <Link className="card-text-sm link" to={"/forgot-password"}>
              Forgot password?
            </Link>
          </Card.Content>
          <Card.Footer>
            <BorderLine />
            <span className="block py-1 w-full card-text-sm text-text-secondary text-center">
              Don't have an account?{" "}
              <Link className="ml-px link" to={"/register"}>
                Sign up
              </Link>
            </span>
          </Card.Footer>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
