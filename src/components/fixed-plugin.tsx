import { SettingMenu } from "./setting/MenuSettings";
export function FixedPlugin() {
  return (
    <div className="!fixed bottom-4 right-4 flex gap-1 pl-2 bg-white rounded-lg items-center border border-blue-gray-50">
      <SettingMenu />
    </div>
  );
}
