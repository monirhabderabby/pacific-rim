import Image from "next/image";
import Link from "next/link";

function HeaderIconMenu() {
  return (
    <>
      <Link
        href="/notifications"
        type="button"
        className="relative rounded-full p-1 mr-2 "
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <Image
          src="/assets/svg/bell.svg"
          width={24}
          height={24}
          alt="bell-icon"
        />
        <div className="w-[12px] h-[12px] text-white absolute top-0 right-0 bg-primary-green text-[8px] rounded-full flex justify-center items-center">
          4
        </div>
      </Link>
      <Link
        href="/wishlist"
        type="button"
        className="relative rounded-full p-1 mr-2 "
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View wishlist</span>
        <Image
          src="/assets/svg/heart.svg"
          width={24}
          height={24}
          alt="bell-icon"
        />
      </Link>
      <Link
        href="/cart"
        type="button"
        className="relative rounded-full p-1 mr-2 "
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View cart</span>
        <Image
          src="/assets/svg/cart-icon.svg"
          width={24}
          height={24}
          alt="bell-icon"
        />
        <div className="w-[12px] h-[12px] text-white absolute top-0 right-0 bg-primary-green text-[8px] rounded-full flex justify-center items-center">
          4
        </div>
      </Link>
      <Link
        href="/account"
        type="button"
        className="relative rounded-full p-1 "
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View Account</span>
        <Image
          src="/assets/svg/user-circle.svg"
          width={24}
          height={24}
          alt="bell-icon"
        />
      </Link>
    </>
  );
}

export default HeaderIconMenu;
