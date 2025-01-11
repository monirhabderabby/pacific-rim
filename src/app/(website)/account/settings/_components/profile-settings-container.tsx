import ProfileSettingsForm from "./profile-settings-form";

const ProfileSettingsContainer = () => {
  return (
    <div className="w-full h-auto rounded-[12px] border-[1px] border-[#C5C5C5] ">
      <h1 className="text-[#2A6C2D] text-[32px] font-semibold leading-[38.4px] p-[16px]">
        Profile Settings
      </h1>
      <div className="border-b-[1px] border-[#C5C5C5]" />
      <div className="p-[16px]">
        <ProfileSettingsForm />
      </div>
    </div>
  );
};

export default ProfileSettingsContainer;
