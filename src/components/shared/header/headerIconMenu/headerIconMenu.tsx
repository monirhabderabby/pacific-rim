import Image from "next/image";
import Link from "next/link";

interface Icon {
  href: string;
  src: string;
  alt: string;
  count?: number;
  srOnlyText: string;
}

interface HeaderIconMenuProps {
  icons: Icon[];
}

function HeaderIconMenu({ icons }: HeaderIconMenuProps) {
  return (
    <div className="flex gap-2">
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.href}
          type="button"
          className="relative rounded-full p-1"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">{icon.srOnlyText}</span>
          <Image src={icon.src} width={24} height={24} alt={icon.alt} />
          {icon.count && (
            <div className="w-[12px] h-[12px] text-white absolute top-0 right-0 bg-primary-green text-[8px] rounded-full flex justify-center items-center">
              {icon.count}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default HeaderIconMenu;