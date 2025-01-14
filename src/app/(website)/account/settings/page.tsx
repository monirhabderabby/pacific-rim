import PasswordSettingsContainer from "./_components/password-settings-container";
import ProfileSettingsContainer from "./_components/profile-settings-container";

const Page = () => {
  return (
    <div className="space-y-[40px]">
      <ProfileSettingsContainer />
      <PasswordSettingsContainer />
    </div>
  );
};

export default Page;
