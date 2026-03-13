import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

const ProfileHeader = () => {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 left-0 right-0 flex flex-col justify-center items-center gap-4 -mx-4 -mt-4 mb-4 p-4 w-[calc(100%+2rem)] h-full bg-surface-primary">
      <div className="flex items-center gap-3 w-full">
        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-surface-secondary"></div>
        <div className="flex flex-col">
          <h2 className="heading-lg">{user?.username}</h2>
          <span className="heading-base text-text-secondary">
            {user?.email}
          </span>
        </div>
      </div>
      <Button buttonVariant="primary" className="max-w-35 heading-base">
        Edit Profile
      </Button>
    </div>
  );
};

export default ProfileHeader;
