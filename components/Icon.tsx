import Link from 'next/link';
import { RiInstagramFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';

type IconProps = {
  icon: string;
  size?: number | string | undefined;
};

const Icon = ({ icon, size }: IconProps) => {
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'YOUTUBE':
        return (
          <RiYoutubeFill
            size={size}
            className='max-lg:max-h-full max-lg:max-w-full'
          />
        );
      case 'INSTAGRAM':
        return (
          <RiInstagramFill
            size={size}
            className='max-lg:max-h-full max-lg:max-w-full'
          />
        );
      case 'WHATSAPP':
        return (
          <RiWhatsappFill
            size={size}
            className='max-lg:max-h-full max-lg:max-w-full'
          />
        );
      default:
        return null;
    }
  };
  return (
    <Link
      href='/'
      className='rounded-full p-1 transition ease-out duration-300 hover:bg-black hover:text-white max-lg:max-h-9 max-lg:max-w-[36px]'
    >
      {iconSwitch(icon)}
    </Link>
  );
};

export default Icon;
