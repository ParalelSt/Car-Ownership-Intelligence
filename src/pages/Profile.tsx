import AccountCard from "@/features/profile/AccountCard";
import CurrentVehicleCard from "@/features/profile/CurrentVehicleCard";
import ProfileHeader from "@/features/profile/ProfileHeader";
import SupportCard from "@/features/profile/SupportCard";

const Profile = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <ProfileHeader />
      <CurrentVehicleCard />
      <AccountCard />
      <SupportCard />
    </div>
  );
};

export default Profile;
